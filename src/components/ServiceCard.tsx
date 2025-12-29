import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { Service } from "@/content/services";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <div className="relative rounded-card overflow-hidden min-h-[320px] group">
      {/* Background Image with Diagonal Overlay */}
      {service.image ? (
        <>
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* Diagonal gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(135deg, rgba(11, 15, 20, 0.93) 0%, rgba(11, 15, 20, 0.90) 50%, rgba(11, 15, 20, 0.6) 100%)"
            }}
          />
        </>
      ) : (
        <div className="absolute inset-0 bg-surface" />
      )}

      {/* Content */}
      <div className="relative z-10 p-6 h-full flex flex-col">
        {/* Icon */}
        <div className="w-14 h-14 rounded-full bg-brand-soft flex items-center justify-center mb-4">
          <Icon className="w-7 h-7 text-brand" />
        </div>

        {/* Title */}
        <h3 className="font-heading font-bold text-h4 text-white mb-2">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-body text-gray-300 mb-4">
          {service.description}
        </p>

        {/* Features */}
        <ul className="mt-auto space-y-2">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-small text-gray-200">
              <CheckCircle className="w-4 h-4 text-brand flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
