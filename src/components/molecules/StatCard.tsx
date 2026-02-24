import React from "react";
import { Card, Heading, Badge } from "@/components/atoms";

interface StatCardProps {
  title: string;
  value: string;
  badge?: string;
  badgeColor?: "blue" | "green" | "red" | "yellow" | "gray";
}

export default function StatCard({ title, value, badge, badgeColor = "green" }: StatCardProps) {
  return (
    <Card className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">{title}</p>
        {badge && <Badge color={badgeColor}>{badge}</Badge>}
      </div>
      <Heading level={2} className="!text-2xl">
        {value}
      </Heading>
    </Card>
  );
}
