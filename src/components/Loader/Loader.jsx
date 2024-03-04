import { Hourglass } from 'react-loader-spinner';

import * as s from './Loader.styled';

import { variables } from 'stylesheet/variables';

const Loader = () => {
  return (
    <s.LoaderStyle>
      <Hourglass
        visible={true}
        height="90"
        width="90"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={[
          `${variables.colors.tertiary}`,
          `${variables.colors.quaternary}`,
        ]}
      />
    </s.LoaderStyle>
  );
};

export default Loader;
