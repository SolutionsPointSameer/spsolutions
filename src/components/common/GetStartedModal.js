import { Modal, TextInput, Textarea, Button, Stack, Group } from '@mantine/core';
import { useForm } from '@mantine/form';
import { Inter } from 'next/font/google';

const inter = Inter({
    subsets: ['latin'],
});

const GetStartedModal = ({ opened, onClose }) => {
    const form = useForm({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            company: '',
            message: '',
        },
        validate: {
            name: (value) => (value.trim().length < 2 ? 'Name must be at least 2 characters' : null),
            email: (value) => (/^\S+@\S+\.\S+$/.test(value) ? null : 'Invalid email address'),
            phone: (value) => (value.trim().length < 10 ? 'Please enter a valid phone number' : null),
            company: (value) => (value.trim().length < 2 ? 'Company name is required' : null),
            message: (value) => (value.trim().length < 10 ? 'Message must be at least 10 characters' : null),
        },
    });

    const handleSubmit = (values) => {
        // Create mailto link with form data
        const subject = encodeURIComponent(`New Inquiry from ${values.name} - ${values.company}`);
        const body = encodeURIComponent(
            `Name: ${values.name}\n` +
            `Email: ${values.email}\n` +
            `Phone: ${values.phone}\n` +
            `Company: ${values.company}\n\n` +
            `Message:\n${values.message}`
        );
        
        const mailtoLink = `mailto:info@solutionspoint.net?subject=${subject}&body=${body}`;
        
        // Open default email client
        window.location.href = mailtoLink;
        
        // Close modal and reset form
        setTimeout(() => {
            form.reset();
            onClose();
        }, 500);
    };

    return (
        <Modal
            opened={opened}
            onClose={onClose}
            title="Get Started with SP Solutions"
            size="lg"
            centered
            className={inter.className}
            styles={(theme) => ({
                title: {
                    fontSize: 24,
                    fontWeight: 700,
                    color: theme.colors.brand?.[6] || theme.colors.red[6],
                },
            })}
        >
            <form onSubmit={form.onSubmit(handleSubmit)}>
                <Stack spacing="md">
                    <TextInput
                        label="Full Name"
                        placeholder="John Doe"
                        required
                        {...form.getInputProps('name')}
                        className={inter.className}
                    />
                    
                    <TextInput
                        label="Email Address"
                        placeholder="john@example.com"
                        type="email"
                        required
                        {...form.getInputProps('email')}
                        className={inter.className}
                    />
                    
                    <TextInput
                        label="Phone Number"
                        placeholder="+91 98765 43210"
                        required
                        {...form.getInputProps('phone')}
                        className={inter.className}
                    />
                    
                    <TextInput
                        label="Company Name"
                        placeholder="Your Company"
                        required
                        {...form.getInputProps('company')}
                        className={inter.className}
                    />
                    
                    <Textarea
                        label="Message"
                        placeholder="Tell us about your requirements..."
                        required
                        minRows={4}
                        {...form.getInputProps('message')}
                        className={inter.className}
                    />
                    
                    <Group position="right" mt="md">
                        <Button 
                            variant="subtle" 
                            onClick={onClose}
                            className={inter.className}
                        >
                            Cancel
                        </Button>
                        <Button 
                            type="submit" 
                            color="brand"
                            className={inter.className}
                        >
                            Send Inquiry
                        </Button>
                    </Group>
                </Stack>
            </form>
        </Modal>
    );
};

export default GetStartedModal;
