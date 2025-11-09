import { useEffect, useRef } from "react";
import QRCode from "qrcode";

interface QRCodeDisplayProps {
  value: string;
  size?: number;
}

export function QRCodeDisplay({ value, size = 128 }: QRCodeDisplayProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current && value) {
      QRCode.toCanvas(canvasRef.current, value, {
        width: size,
        margin: 1,
        color: {
          dark: "#0066cc",
          light: "#ffffff",
        },
      }).catch((err) => {
        console.error("Error generating QR code:", err);
      });
    }
  }, [value, size]);

  return (
    <canvas
      ref={canvasRef}
      className="rounded-md shadow-sm border"
      data-testid="qr-code-canvas"
    />
  );
}
