import { Check, Copy } from "lucide-react";
import { useState } from "react";

export const PasswordCopyButton = ({ password }: { password: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(password);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy password:", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="hover:bg-muted/50 ml-2 cursor-pointer rounded p-1 transition-colors"
      title="Copy password"
    >
      {copied ? (
        <Check className="h-3 w-3 text-green-600" />
      ) : (
        <Copy className="text-muted-foreground hover:text-foreground h-3 w-3" />
      )}
    </button>
  );
};
