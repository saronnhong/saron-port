import { render, screen } from '@testing-library/react';
import About from './About';


describe('About Component', () => {
    const headers = [
        "Who I am:",
        "The person behind the work:",
        "My story:",
        "Meet the developer:",
        "Behind the code:",
        "A bit about me:",
        "This is",
        "Hi, I’m",
        "About the developer:",
        "Profile:",
        "Introduction:",
        "Get to know me:",
        "A quick intro:",
        "Hello",
        "Nice to meet you, I’m",
        "Let me introduce myself:",
        "Bio:",
        "Who’s behind the screen:",
        "Developer profile:"
    ];

    beforeEach(() => {
        render(<About />);
    });

    test('renders a random header from the headers array', () => {
        const headerElement = screen.getByText(/./, { selector: '.about-hello' });
        expect(headers).toContain(headerElement.textContent);
    });

    test('renders developer name', () => {
        expect(screen.getByText('Saron Nhong')).toBeInTheDocument();
    });

    test('renders all social links with correct hrefs', () => {
        expect(screen.getByRole('link', { name: /GitHub/i })).toHaveAttribute('href', 'https://github.com/saronnhong');
        expect(screen.getByRole('link', { name: /LinkedIn/i })).toHaveAttribute('href', 'https://linkedin.com/in/saronnhong');
        expect(screen.getByRole('link', { name: /Instagram/i })).toHaveAttribute('href', 'https://www.instagram.com/chich20x6/');
    });

    test('renders FontAwesome icons', () => {
        const githubIcon = screen.getByTestId('github-icon');
        const linkedinIcon = screen.getByTestId('linkedin-icon');
        const instagramIcon = screen.getByTestId('instagram-icon');

        expect(githubIcon).toBeInTheDocument();
        expect(linkedinIcon).toBeInTheDocument();
        expect(instagramIcon).toBeInTheDocument();
    });

});
