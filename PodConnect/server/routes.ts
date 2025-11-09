import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertInquirySchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Universities Routes
  app.get("/api/universities", async (req, res) => {
    try {
      const universities = await storage.getUniversities();
      res.json(universities);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch universities" });
    }
  });

  app.get("/api/universities/:id", async (req, res) => {
    try {
      const university = await storage.getUniversity(req.params.id);
      if (!university) {
        return res.status(404).json({ error: "University not found" });
      }
      res.json(university);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch university" });
    }
  });

  // Programs Routes
  app.get("/api/programs", async (req, res) => {
    try {
      const programs = await storage.getPrograms();
      res.json(programs);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch programs" });
    }
  });

  app.get("/api/programs/:id", async (req, res) => {
    try {
      const program = await storage.getProgram(req.params.id);
      if (!program) {
        return res.status(404).json({ error: "Program not found" });
      }
      res.json(program);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch program" });
    }
  });

  // Testimonials Routes
  app.get("/api/testimonials", async (req, res) => {
    try {
      const testimonials = await storage.getTestimonials();
      res.json(testimonials);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch testimonials" });
    }
  });

  // Inquiries Routes
  app.post("/api/inquiries", async (req, res) => {
    try {
      const validatedData = insertInquirySchema.parse(req.body);
      const inquiry = await storage.createInquiry(validatedData);
      
      // Log the inquiry for admin review
      console.log("========================================");
      console.log("NEW STUDENT INQUIRY RECEIVED");
      console.log("========================================");
      console.log(`Name: ${inquiry.name}`);
      console.log(`Email: ${inquiry.email}`);
      console.log(`Phone: ${inquiry.phone}`);
      console.log(`Country: ${inquiry.country}`);
      console.log(`Program Interest: ${inquiry.programInterest}`);
      console.log(`Education Level: ${inquiry.educationLevel}`);
      console.log(`Message: ${inquiry.message || "N/A"}`);
      console.log(`Submitted: ${inquiry.createdAt}`);
      console.log("========================================");
      
      // TODO: In production, implement email notification:
      // - Send confirmation email to student (inquiry.email)
      // - Send notification to admissions team (info@nextstoprussia.com)
      // - Log to CRM or admin dashboard
      // 
      // Example with nodemailer (to be implemented):
      // await sendEmailNotification({
      //   to: 'info@nextstoprussia.com',
      //   subject: `New Inquiry from ${inquiry.name} (${inquiry.country})`,
      //   body: formatInquiryEmail(inquiry)
      // });
      
      res.status(201).json({
        success: true,
        message: "Your inquiry has been submitted successfully! We'll contact you within 24 hours.",
        inquiry: {
          id: inquiry.id,
          createdAt: inquiry.createdAt,
        },
      });
    } catch (error) {
      console.error("Error creating inquiry:", error);
      if (error instanceof Error) {
        res.status(400).json({ 
          success: false,
          error: error.message 
        });
      } else {
        res.status(500).json({ 
          success: false,
          error: "Failed to submit inquiry. Please try again or contact us via WhatsApp." 
        });
      }
    }
  });

  app.get("/api/inquiries", async (req, res) => {
    try {
      const inquiries = await storage.getInquiries();
      res.json(inquiries);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch inquiries" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
