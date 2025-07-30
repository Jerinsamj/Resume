"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface InterviewDialogProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  onNameSubmitted: () => void;
}

export default function InterviewDialog({ isOpen, onOpenChange, onNameSubmitted }: InterviewDialogProps) {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const { toast } = useToast();

  const handleSubmit = () => {
    if (!name) {
      toast({
        title: "Name is required",
        description: "Please enter your name to submit the invitation.",
        variant: "destructive",
      });
      return;
    }

    const subject = encodeURIComponent("Interview Confirmation");
    const body = encodeURIComponent(`Hi Jerin,

My name is ${name}, and I am writing to confirm my interview with ${company || 'N/A'}. I am available on ${date || 'N/A'} at ${time || 'N/A'} as scheduled.

Please let me know if there is any change on the date. I look forward to speaking with you.

Thank you.

Best regards,
${name}`);
    const mailtoLink = `mailto:jerinsamjames1998@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;

    localStorage.setItem("userName", name);
    onNameSubmitted();
    onOpenChange(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Interview Invitation</DialogTitle>
          <DialogDescription>
            Please fill out the details for the interview invitation.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value={name} onChange={(e) => setName(e.target.value)} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="company" className="text-right">
              Company
            </Label>
            <Input id="company" value={company} onChange={(e) => setCompany(e.target.value)} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="date" className="text-right">
              Date
            </Label>
            <Input id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="time" className="text-right">
              Time
            </Label>
            <Input id="time" type="time" value={time} onChange={(e) => setTime(e.target.value)} className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>Close</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
