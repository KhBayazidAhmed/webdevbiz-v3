export type ProjectResponseType = {
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  features: string[];
  challenges: string[];
  outcome: string;
  $id: string;
  $createdAt: string;
  $updatedAt: string;
  $permissions: string[];
  testimonial: {
    quote: string;
    author: string;
    position: string;
    $id: string;
    $createdAt: string;
    $updatedAt: string;
    $permissions: string[];
    $databaseId: string;
    $collectionId: string;
  }[];
  $databaseId: string;
  $collectionId: string;
};
export interface SkillDocument {
  SkillsName: string[];
  $id: string;
  $createdAt: string; // ISO date string format
  $updatedAt: string; // ISO date string format
  $permissions: unknown[]; // Adjust type if needed, e.g., `string[]` or a specific permission structure
  $databaseId: string;
  $collectionId: string;
}
interface ServiceDocument {
  Category: string;
  Title: string;
  Description: string;
  service: string[]; // Assuming `service` contains an array of strings (service items)
  $id: string;
  $createdAt: string; // ISO date string format
  $updatedAt: string; // ISO date string format
  $permissions: unknown[]; // Adjust type if specific permission structure is known
  $databaseId: string;
  $collectionId: string;
}

export interface ServicesResponse {
  total: number;
  documents: ServiceDocument[];
}
type testimonial = {
  Name: string;
  Role: string;
  Text: string;
  $id: string;
  $createdAt: string;
  $updatedAt: string;
  $permissions: unknown[];
  $databaseId: string;
  $collectionId: string;
};

export type testimonialResponseData = {
  total: number;
  documents: testimonial[];
};
type Skills = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  SkillsName: any[]; // Replace `any` with the specific type if known
  category: string | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  skills: any[]; // Replace `any` with the specific type if known
  $id: string;
  $createdAt: string;
  $updatedAt: string;
  $permissions: string[]; // Array of permission strings
  $databaseId: string;
  $collectionId: string;
};

export type SkillsResponse = {
  total: number;
  documents: Skills[];
};
