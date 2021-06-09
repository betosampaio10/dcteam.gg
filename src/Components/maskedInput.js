import React from 'react';
import { Input } from 'reactstrap';
import vanilla from 'vanilla-masker';

const MaskedInput = props => {

  const onChange = (event) => {
    if (props.mascara) {
      event.target.value = vanilla.toPattern(event.target.value, props.mascara)
      props.onChange(event);
    }
  }
  return (
    <Input {...props} onChange={onChange}></Input>
  )
}

export default MaskedInput