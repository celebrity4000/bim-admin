import { useState } from 'react';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';

export function DatePickerWithRange() {
  const [selectedRange, setSelectedRange] = useState({ startDate: null, endDate: null });

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="border bg-white rounded-[8px] px-4 py-2 focus:outline-none">
          {selectedRange.startDate && selectedRange.endDate
            ? `${format(selectedRange.startDate, 'MM/dd/yyyy')} - ${format(
                selectedRange.endDate,
                'MM/dd/yyyy'
              )}`
            : 'Select Date Range'}
        </button>
      </PopoverTrigger>
      <PopoverContent className = 'bg-white'>
        <Calendar
          mode="range"
          selected={selectedRange}
          onSelect={(range) => setSelectedRange(range)}
        />
      </PopoverContent>
    </Popover>
  );
}
