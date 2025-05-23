import React from 'react'
import "./index.css";
import { useTheme } from '../../Context/ThemeProvider/Theme';

const ValuePairCard = (props) => {
    const { label, value } = props;
    const { theme } = useTheme();
  return (
      <div className={`value-pair-wrapper`}>
          <h4 className={`label-color  ${theme?"":"label-color-light"}`}>{label}</h4>
          <h3 className={`value-color ${theme?"":"value-color-light"}`}>{value}</h3>
    </div>
  )
}

export default ValuePairCard