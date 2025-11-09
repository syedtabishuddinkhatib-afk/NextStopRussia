import {
  type University,
  type InsertUniversity,
  type Program,
  type InsertProgram,
  type Testimonial,
  type InsertTestimonial,
  type Inquiry,
  type InsertInquiry,
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Universities
  getUniversities(): Promise<University[]>;
  getUniversity(id: string): Promise<University | undefined>;
  createUniversity(university: InsertUniversity): Promise<University>;

  // Programs
  getPrograms(): Promise<Program[]>;
  getProgram(id: string): Promise<Program | undefined>;
  createProgram(program: InsertProgram): Promise<Program>;

  // Testimonials
  getTestimonials(): Promise<Testimonial[]>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;

  // Inquiries
  getInquiries(): Promise<Inquiry[]>;
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
}

export class MemStorage implements IStorage {
  private universities: Map<string, University>;
  private programs: Map<string, Program>;
  private testimonials: Map<string, Testimonial>;
  private inquiries: Map<string, Inquiry>;

  constructor() {
    this.universities = new Map();
    this.programs = new Map();
    this.testimonials = new Map();
    this.inquiries = new Map();

    // Initialize with sample data
    this.initializeSampleData();
  }

  private initializeSampleData() {
    // Sample Universities
    const universities: InsertUniversity[] = [
      {
        name: "I.M. Sechenov First Moscow State Medical University",
        location: "Moscow, Russia",
        description: "Russia's oldest and most prestigious medical university, founded in 1758. Known for excellence in medical education and research with state-of-the-art facilities.",
        programs: ["MBBS", "Dentistry", "Pharmacy", "Nursing"],
        medium: "English/Russian",
        established: "1758",
        ranking: "#1 Medical University in Russia",
        logoUrl: "",
        authorizationLetterUrl: "#",
      },
      {
        name: "Kazan Federal University",
        location: "Kazan, Russia",
        description: "One of Russia's oldest universities, established in 1804. A multidisciplinary institution offering programs in medicine, engineering, IT, and business.",
        programs: ["MBBS", "Engineering", "Computer Science", "Business Management"],
        medium: "English/Russian",
        established: "1804",
        ranking: "Top 10 in Russia",
        logoUrl: "",
        authorizationLetterUrl: "#",
      },
      {
        name: "Peoples' Friendship University of Russia (RUDN)",
        location: "Moscow, Russia",
        description: "Globally diverse university with students from 150+ countries. Known for international programs and multicultural environment.",
        programs: ["MBBS", "Engineering", "Management", "Law", "Economics"],
        medium: "English/Russian",
        established: "1960",
        ranking: "Top 15 in Russia",
        logoUrl: "",
        authorizationLetterUrl: "#",
      },
      {
        name: "Moscow State University (MSU)",
        location: "Moscow, Russia",
        description: "Russia's most prestigious university, consistently ranked among the top universities worldwide. Offers comprehensive programs across all fields.",
        programs: ["Engineering", "Physics", "Mathematics", "Computer Science", "Business"],
        medium: "English/Russian",
        established: "1755",
        ranking: "#1 University in Russia",
        logoUrl: "",
        authorizationLetterUrl: "#",
      },
      {
        name: "Saint Petersburg State University",
        location: "Saint Petersburg, Russia",
        description: "One of the oldest universities in Russia with a rich history. Offers high-quality education in humanities, sciences, and professional programs.",
        programs: ["MBBS", "Engineering", "Computer Science", "Economics", "International Relations"],
        medium: "English/Russian",
        established: "1724",
        ranking: "#2 University in Russia",
        logoUrl: "",
        authorizationLetterUrl: "#",
      },
      {
        name: "Siberian Federal University",
        location: "Krasnoyarsk, Russia",
        description: "Leading university in Siberia offering diverse programs in engineering, natural sciences, and medicine with modern infrastructure.",
        programs: ["Engineering", "Mining", "Computer Science", "Medicine"],
        medium: "English/Russian",
        established: "2006",
        ranking: "Top 20 in Russia",
        logoUrl: "",
        authorizationLetterUrl: "#",
      },
    ];

    universities.forEach((uni) => {
      const id = randomUUID();
      this.universities.set(id, { ...uni, id });
    });

    // Sample Programs
    const programs: InsertProgram[] = [
      {
        category: "Medicine",
        title: "MBBS (Bachelor of Medicine, Bachelor of Surgery)",
        duration: "6 years",
        medium: "English/Russian",
        eligibility: "12th grade with Physics, Chemistry, Biology (minimum 50%)",
        tuitionFees: "$4,000 - $7,000 per year",
        admissionIntakes: "September, February",
        description: "Comprehensive medical degree program recognized by WHO, MCI, and other international medical councils.",
      },
      {
        category: "Medicine",
        title: "Doctor of Medicine (MD)",
        duration: "3 years (after MBBS)",
        medium: "English/Russian",
        eligibility: "MBBS degree from recognized university",
        tuitionFees: "$5,000 - $8,000 per year",
        admissionIntakes: "September",
        description: "Postgraduate medical specialization program in various fields including surgery, pediatrics, cardiology, and more.",
      },
      {
        category: "Medicine",
        title: "Bachelor of Dental Surgery (BDS)",
        duration: "5 years",
        medium: "English/Russian",
        eligibility: "12th grade with Physics, Chemistry, Biology (minimum 50%)",
        tuitionFees: "$4,500 - $6,500 per year",
        admissionIntakes: "September",
        description: "Professional dentistry program covering oral health, dental surgery, and clinical practice.",
      },
      {
        category: "Medicine",
        title: "Bachelor of Pharmacy",
        duration: "4 years",
        medium: "English/Russian",
        eligibility: "12th grade with Physics, Chemistry, Biology",
        tuitionFees: "$3,500 - $5,500 per year",
        admissionIntakes: "September, February",
        description: "Pharmaceutical sciences program covering drug development, pharmacology, and clinical pharmacy.",
      },
      {
        category: "Engineering",
        title: "Bachelor of Engineering (B.Tech) - Computer Science",
        duration: "4 years",
        medium: "English/Russian",
        eligibility: "12th grade with Physics, Chemistry, Mathematics (minimum 50%)",
        tuitionFees: "$3,000 - $5,000 per year",
        admissionIntakes: "September",
        description: "Comprehensive computer science program covering programming, algorithms, AI, and software engineering.",
      },
      {
        category: "Engineering",
        title: "Bachelor of Engineering - Mechanical",
        duration: "4 years",
        medium: "English/Russian",
        eligibility: "12th grade with Physics, Chemistry, Mathematics (minimum 50%)",
        tuitionFees: "$3,000 - $5,000 per year",
        admissionIntakes: "September",
        description: "Mechanical engineering program focusing on design, manufacturing, and automotive systems.",
      },
      {
        category: "Engineering",
        title: "Bachelor of Engineering - Civil",
        duration: "4 years",
        medium: "English/Russian",
        eligibility: "12th grade with Physics, Chemistry, Mathematics (minimum 50%)",
        tuitionFees: "$3,000 - $5,000 per year",
        admissionIntakes: "September",
        description: "Civil engineering program covering construction, structural design, and infrastructure development.",
      },
      {
        category: "Business & Management",
        title: "Bachelor of Business Administration (BBA)",
        duration: "4 years",
        medium: "English/Russian",
        eligibility: "12th grade in any stream (minimum 50%)",
        tuitionFees: "$2,500 - $4,500 per year",
        admissionIntakes: "September, February",
        description: "Comprehensive business program covering management, marketing, finance, and entrepreneurship.",
      },
      {
        category: "Business & Management",
        title: "Master of Business Administration (MBA)",
        duration: "2 years",
        medium: "English/Russian",
        eligibility: "Bachelor's degree in any field",
        tuitionFees: "$4,000 - $7,000 per year",
        admissionIntakes: "September",
        description: "Advanced business management program with specializations in finance, marketing, and operations.",
      },
      {
        category: "Computer Science",
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 years",
        medium: "English/Russian",
        eligibility: "12th grade with Mathematics",
        tuitionFees: "$2,500 - $4,000 per year",
        admissionIntakes: "September",
        description: "IT and computer applications program covering programming, databases, and web development.",
      },
      {
        category: "Computer Science",
        title: "Master of Computer Science (MCS)",
        duration: "2 years",
        medium: "English/Russian",
        eligibility: "Bachelor's degree in Computer Science or related field",
        tuitionFees: "$3,500 - $5,500 per year",
        admissionIntakes: "September",
        description: "Advanced computer science program focusing on AI, machine learning, and advanced algorithms.",
      },
      {
        category: "Nursing",
        title: "Bachelor of Science in Nursing (BSN)",
        duration: "4 years",
        medium: "English/Russian",
        eligibility: "12th grade with Physics, Chemistry, Biology",
        tuitionFees: "$2,500 - $4,000 per year",
        admissionIntakes: "September",
        description: "Professional nursing program with clinical training and patient care expertise.",
      },
    ];

    programs.forEach((prog) => {
      const id = randomUUID();
      this.programs.set(id, { ...prog, id });
    });

    // Sample Testimonials
    const testimonials: InsertTestimonial[] = [
      {
        studentName: "Rahul Sharma",
        country: "India",
        university: "I.M. Sechenov University",
        program: "MBBS",
        quote: "NextStopRussia made my dream of studying medicine in Russia a reality. The entire process was transparent and smooth. I'm now in my 3rd year at Sechenov and couldn't be happier!",
        year: 2022,
        imageUrl: "",
      },
      {
        studentName: "Fatima Khan",
        country: "Pakistan",
        university: "Kazan Federal University",
        program: "Computer Science",
        quote: "The support from NextStopRussia was exceptional. They guided me through every step, from application to visa to arrival. Highly recommend their services!",
        year: 2023,
        imageUrl: "",
      },
      {
        studentName: "Ahmed Al-Rashid",
        country: "Saudi Arabia",
        university: "RUDN University",
        program: "Engineering",
        quote: "I was skeptical at first, but after verifying their official partnership letters, I felt confident. The team is professional and genuinely cares about students.",
        year: 2023,
        imageUrl: "",
      },
      {
        studentName: "Priya Patel",
        country: "India",
        university: "Moscow State University",
        program: "MBA",
        quote: "Studying at MSU has been an incredible experience. NextStopRussia's assistance with documentation and visa was invaluable. Thank you for making this possible!",
        year: 2021,
        imageUrl: "",
      },
      {
        studentName: "Ali Reza",
        country: "Iran",
        university: "Saint Petersburg State University",
        program: "Economics",
        quote: "The admission process was so much easier with NextStopRussia's help. They answered all my questions and provided excellent guidance throughout.",
        year: 2022,
        imageUrl: "",
      },
      {
        studentName: "Ayesha Malik",
        country: "Pakistan",
        university: "I.M. Sechenov University",
        program: "Dentistry",
        quote: "From application to arrival, everything was handled professionally. I'm grateful to NextStopRussia for helping me get into one of the best dental programs.",
        year: 2023,
        imageUrl: "",
      },
    ];

    testimonials.forEach((test) => {
      const id = randomUUID();
      this.testimonials.set(id, { ...test, id });
    });
  }

  // Universities
  async getUniversities(): Promise<University[]> {
    return Array.from(this.universities.values());
  }

  async getUniversity(id: string): Promise<University | undefined> {
    return this.universities.get(id);
  }

  async createUniversity(insertUniversity: InsertUniversity): Promise<University> {
    const id = randomUUID();
    const university: University = { ...insertUniversity, id };
    this.universities.set(id, university);
    return university;
  }

  // Programs
  async getPrograms(): Promise<Program[]> {
    return Array.from(this.programs.values());
  }

  async getProgram(id: string): Promise<Program | undefined> {
    return this.programs.get(id);
  }

  async createProgram(insertProgram: InsertProgram): Promise<Program> {
    const id = randomUUID();
    const program: Program = { ...insertProgram, id };
    this.programs.set(id, program);
    return program;
  }

  // Testimonials
  async getTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values());
  }

  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const id = randomUUID();
    const testimonial: Testimonial = { ...insertTestimonial, id };
    this.testimonials.set(id, testimonial);
    return testimonial;
  }

  // Inquiries
  async getInquiries(): Promise<Inquiry[]> {
    return Array.from(this.inquiries.values());
  }

  async createInquiry(insertInquiry: InsertInquiry): Promise<Inquiry> {
    const id = randomUUID();
    const createdAt = new Date().toISOString();
    const inquiry: Inquiry = { ...insertInquiry, id, createdAt };
    this.inquiries.set(id, inquiry);
    return inquiry;
  }
}

export const storage = new MemStorage();
