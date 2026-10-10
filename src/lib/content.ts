import { entries } from '@fermain/frame';
import { marked } from 'marked';
import personData from '../content/settings/person.json';
import skillsData from '../content/skills.json';

export interface Line {
	name: string;
	value?: string;
}

export interface Group {
	name: string;
	layout?: string;
	items: Line[];
}

export interface Employer {
	slug: string;
	employer: string;
	position?: string;
	period: string;
	groups: Group[];
}

export interface School {
	slug: string;
	institution: string;
	qualification?: string;
	period: string;
	points: string[];
}

export interface Skills {
	groups: Group[];
}

export type Person = typeof personData;

export const person: Person = personData;
export const skills: Skills = skillsData;

// In the order they are dragged into in the editor.
const load = <T>(files: Record<string, unknown>) => entries(files) as unknown as T[];
export const employers = load<Employer>(import.meta.glob('/src/content/experience/*.json', { eager: true, import: 'default' }));
export const schools = load<School>(import.meta.glob('/src/content/education/*.json', { eager: true, import: 'default' }));

/** Formatted text as HTML. */
export const html = (text: string) => marked.parse(text ?? '', { async: false });

/** A phone number as a link dials it: "+27 (0) 739 832 718" is "+27739832718". */
export const dial = (phone: string) => phone.replace(/\(0\)/g, '').replace(/[^+\d]/g, '');

/** The first paragraph of formatted text, as plain words, for a description of the page. */
export const plain = (text: string) => (text ?? '').split(/\n\s*\n/)[0].replace(/[*_`#>]/g, '').trim();
