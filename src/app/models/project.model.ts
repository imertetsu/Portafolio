export interface Project {
  id: number,
  name: string,
  images: string[],
  source: string | null,
  url: string | null,
  projectDescription: {
    name: string | null,
    description: string | null,
    features:Features[]
  }
}

interface Features{
  name: string | null,
  description: string | null
}
