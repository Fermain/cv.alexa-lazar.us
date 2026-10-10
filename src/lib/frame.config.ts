import { collection, defineConfig, fields, setting, singleton } from '@fermain/frame';

// A line with a name and, beside or after it, a value.
const line = (name: string, value: string) =>
	fields.object({
		label: 'Line',
		fields: {
			name: fields.text({ label: 'Name', description: name }),
			value: fields.text({ label: 'Value', description: value, multiline: true, required: false })
		}
	});

export const LAYOUTS = ['Dated lines', 'Described points'] as const;

export default defineConfig({
	media: { path: 'static/images', publicPath: '/images' },

	collections: {
		experience: collection({
			label: 'Experience',
			path: 'src/content/experience',
			title: 'employer',
			fields: {
				employer: fields.text({ label: 'Employer' }),
				position: fields.text({ label: 'Position', description: 'Shown beside the employer.', required: false }),
				period: fields.text({ label: 'Period', description: 'As it should read, such as "August 2023 - Present".' }),
				groups: fields.list({
					label: 'Groups',
					description: 'The boxes under an employer, such as Roles or Key Responsibilities.',
					itemLabel: 'Group',
					item: fields.object({
						label: 'Group',
						fields: {
							name: fields.text({ label: 'Name' }),
							layout: fields.select({
								label: 'Layout',
								description:
									'Dated lines put the value at the end of the line, for a role and its dates. Described points put the name in bold with the value after it.',
								options: LAYOUTS
							}),
							items: fields.list({
								label: 'Lines',
								itemLabel: 'Line',
								item: line('Such as a role, a client or a responsibility.', 'Its dates, or its description.')
							})
						}
					})
				})
			},
			components: {
				view: () => import('./components/Employer.svelte'),
				list: () => import('./components/Experience.svelte')
			}
		}),

		education: collection({
			label: 'Education',
			path: 'src/content/education',
			title: 'institution',
			fields: {
				institution: fields.text({ label: 'Institution' }),
				qualification: fields.text({ label: 'Qualification', required: false }),
				period: fields.text({ label: 'Period', description: 'As it should read, such as "July 2013 - July 2016".' }),
				points: fields.list({ label: 'Points', itemLabel: 'Point', item: fields.text({ label: 'Point' }) })
			},
			components: {
				view: () => import('./components/School.svelte'),
				list: () => import('./components/Education.svelte')
			}
		}),

		skills: singleton({
			label: 'Skills',
			file: 'src/content/skills.json',
			fields: {
				groups: fields.list({
					label: 'Groups',
					itemLabel: 'Group',
					item: fields.object({
						label: 'Group',
						fields: {
							name: fields.text({ label: 'Name' }),
							items: fields.list({
								label: 'Skills',
								itemLabel: 'Skill',
								item: line('The skill, shown in bold.', 'A sentence about it.')
							})
						}
					})
				})
			},
			components: { view: () => import('./components/Skills.svelte') }
		})
	},

	settings: {
		person: setting({
			label: 'About you',
			fields: {
				name: fields.text({ label: 'Name' }),
				title: fields.text({ label: 'Title', description: 'The line under your name.' }),
				profile: fields.markdown({ label: 'Profile' }),
				phone: fields.text({ label: 'Phone' }),
				email: fields.text({ label: 'Email' }),
				address: fields.text({ label: 'Address', multiline: true }),
				references: fields.text({ label: 'References', description: 'Such as "Available upon request."', multiline: true }),
				footer: fields.text({ label: 'Footer', description: 'The line at the foot of the page.' })
			},
			components: { view: () => import('./components/About.svelte') }
		})
	}
});
