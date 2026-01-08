"use client";

import { useState } from "react";
import Image from "next/image";
import { Truck } from "lucide-react";
import Card, { CardHeader } from "@/components/Card";
import ImageModal from "@/components/ImageModal";
import type { FleetItem } from "@/content/fleet";

interface FleetCardProps {
  item: FleetItem;
}

export default function FleetCard({ item }: FleetCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Card>
        <div
          className={`h-40 bg-bg-soft rounded-image mb-4 overflow-hidden relative ${
            item.image ? "cursor-pointer hover:opacity-90 transition-opacity" : ""
          }`}
          onClick={() => item.image && setIsModalOpen(true)}
        >
          {item.image ? (
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <Truck className="w-12 h-12 text-muted" />
            </div>
          )}
        </div>
        <CardHeader>{item.name}</CardHeader>
        {item.capacity && (
          <p className="text-brand font-semibold text-body mt-1">
            {item.capacity}
          </p>
        )}
        <ul className="mt-3 space-y-1">
          {item.features.map((feature, index) => (
            <li key={index} className="text-small text-muted">
              • {feature}
            </li>
          ))}
        </ul>
      </Card>

      {item.image && (
        <ImageModal
          src={item.image}
          alt={item.name}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}
