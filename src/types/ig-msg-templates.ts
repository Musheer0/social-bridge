// ♻️ Common reusable button type
export type IGDmButton = {
  type: "web_url" | "postback";
  url?: string;     // only if type = web_url
  payload?: string; // only if type = postback
  title: string;
};

// ♻️ Common element type for "generic" templates
export type GenericElement = {
  title: string;
  image_url: string;
  subtitle?: string;
  buttons?: IGDmButton[];
};

// 📦 1. Generic template
export type GenericTemplate = {
  template_type: "generic";
  elements: GenericElement[];
};

// 📦 2. Button template
export type ButtonTemplate = {
  template_type: "button";
  text: string;
  buttons: IGDmButton[];
};

// 📦 3. Text template
export type TextTemplate = {
  text: string;
};
