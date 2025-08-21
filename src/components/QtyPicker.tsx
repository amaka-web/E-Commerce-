import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";

export default function QtyPicker({ value, setValue }: { value: number; setValue: (n: number) => void }) {
  return (
    <div className="flex items-center rounded-2xl border bg-muted/30 px-3 py-2 gap-4">
      <Button
        type="button"
        size="icon"
        variant="ghost"
        className="hover:bg-muted"
        onClick={() => setValue(Math.max(1, value - 1))}
        aria-label="Decrease quantity"
      >
        <Minus className="h-4 w-4" />
      </Button>
      <span className="w-6 text-center tabular-nums" aria-live="polite">{value}</span>
      <Button
        type="button"
        size="icon"
        variant="ghost"
        className="hover:bg-muted"
        onClick={() => setValue(value + 1)}
        aria-label="Increase quantity"
      >
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  );
}
