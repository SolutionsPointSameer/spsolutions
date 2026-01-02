export const theme = {
  colors: {
    brand: [
      '#ffebeb',
      '#fecaca',
      '#fca5a5',
      '#f87171',
      '#ef4444',
      '#dc2626',
      '#b91c1c', // Primary shade
      '#991b1b',
      '#7f1d1d',
      '#450a0a',
    ],
  },
  primaryColor: 'brand',
  fontFamily: 'Inter, sans-serif',
  headings: {
    fontFamily: 'Inter, sans-serif',
  },
  components: {
    Button: {
      defaultProps: {
        radius: 'md',
        variant: 'filled',
      },
    },
    Card: {
        defaultProps: {
            radius: 'md',
            shadow: 'sm',
            withBorder: true,
        }
    }
  },
};
