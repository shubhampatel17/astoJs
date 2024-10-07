// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'The Developer’s Handbook',
			customCss : ['./src/styles/main.css'],
			social: {
				linkedin: 'https://www.linkedin.com/in/shubhampatel17/',
			},
			sidebar: [
				{
					label: 'Best Practices',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Basic Intro', slug: 'practices/introduction' },
						{ label: 'Naming Conventions', slug: 'practices/namingconvention' },						
						{ label: 'Version Control', slug: 'practices/versioncontrol' },
						{ label: 'Code Review', slug: 'practices/codereview' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
	base: '/astoJs/',
});
