import { Box, useStyleConfig } from '@chakra-ui/react';

function Card(props) {
  // eslint-disable-next-line react/prop-types
  const { variant, children, ...rest } = props;
  const styles = useStyleConfig('Card', { variant });

  return (
    // eslint-disable-next-line react/react-in-jsx-scope, react/jsx-props-no-spreading
    <Box __css={styles} {...rest}>
      {children}
    </Box>
  );
}

export default Card;
