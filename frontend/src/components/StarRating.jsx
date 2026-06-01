import React from "react";
import { Star } from "lucide-react";

export default function StarRating({ value = 5, size = 16, className = "" }) {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className={`inline-flex items-center gap-0.5 ${className}`}>
      {stars.map((s) => {
        const filled = value >= s;
        const half = !filled && value >= s - 0.5;
        return (
          <span key={s} className="relative" style={{ width: size, height: size }}>
            <Star
              className="absolute inset-0"
              style={{ width: size, height: size, color: "#E5E0D5" }}
              strokeWidth={1.5}
            />
            {(filled || half) && (
              <span className="absolute inset-0 overflow-hidden" style={{ width: half ? size / 2 : size }}>
                <Star
                  className="absolute inset-0"
                  style={{ width: size, height: size, color: "#E8B440", fill: "#E8B440" }}
                  strokeWidth={1.5}
                />
              </span>
            )}
          </span>
        );
      })}
    </div>
  );
}
