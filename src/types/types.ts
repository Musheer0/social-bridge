import { Automation } from "@prisma/client"

export type AutomationsPage = {
  automations: Automation[]
  nextCursor: string | null
}
export type MessageWebhookEvent = {
  sender: { id: string };
  recipient: { id: string };
  timestamp: number;
  message: {
    mid: string;
    text: string;
  };
};
export type InstagramCommentEvent = {
  value: {
    from: {
      id: string;
      username: string;
    };
    media: {
      id: string;
      media_product_type: "REELS" | string;
    };
    id: string;
    text: string;
  };
  field: "comments" | string;
};

export type CommentWebhookEvents = InstagramCommentEvent[];
