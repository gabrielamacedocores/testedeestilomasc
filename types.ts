export interface Option {
    text: string;
    style: keyof UserAnswers;
}

export interface Question {
    question: string;
    options: Option[];
}

export interface StyleData {
    name: string;
    subtitle: string;
    description: string;
    secondaryDescription: string;
    color: string;
    image: string;
    characteristics: string[];
}

export interface UserAnswers {
    A: number;
    B: number;
    C: number;
    D: number;
    E: number;
    F: number;
    G: number;
}

export type Styles = Record<keyof UserAnswers, StyleData>;

export interface TieBreakerInfo {
    type: 'primary' | 'secondary';
    tiedStyles: (keyof UserAnswers)[];
}