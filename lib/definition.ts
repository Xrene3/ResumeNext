export type Experience = {
    title: string;
    company?: string;
    position: string;
    description: string;
    startedAt: Date;
    endedAt?: null | string | Date;
}

export type Drawing = {
    title: string;
    description?: string;
    type: 'Digital' | 'Traditional';
    createdAt?: Date;
}

