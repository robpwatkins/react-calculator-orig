import React, { useState } from 'react';
import Display from './Display';
import Button from './Button';

const Calculator = () => {
  const [nums, setNums] = useState([]);
  const [currentNum, setCurrentNum] = useState(null);

  const handleClick = event => {
    const char = event.currentTarget.innerHTML;
    if (!isNaN(char)) {
      if (!currentNum) {
        setCurrentNum(Number(char));
      }
      else setCurrentNum(Number(currentNum + char));
    }
  }

  console.log(currentNum);
  return (
    <div className="calculator">
      <Display />
      <Button 
        name="AC"
        char="A/C"
        nums={nums}
        handleClick={handleClick}
      />
      <Button 
        name="pos-neg"
        char="±"
        handleClick={handleClick}
      />
      <Button 
        name="modulo"
        char="%"
        handleClick={handleClick}
      />
      <Button
        name="operator"
        char="/"
        handleClick={handleClick}
      />
      <Button
        name="num"
        char="7"
        nums={nums}
        handleClick={handleClick}
      />
      <Button
        name="num"
        char="8"
        handleClick={handleClick}
      />
      <Button
        name="num"
        char="9"
        handleClick={handleClick}
      />
      <Button
        name="operator"
        char="x"
        handleClick={handleClick}
      />
      <Button
        name="num"
        char="4"
        handleClick={handleClick}
      />
      <Button
        name="num"
        char="5"
        handleClick={handleClick}
      />
      <Button
        name="num"
        char="6"
        handleClick={handleClick}
      />
      <Button
        name="operator"
        char="-"
        handleClick={handleClick}
      />
      <Button
        name="num"
        char="1"
        handleClick={handleClick}
      />
      <Button
        name="num"
        char="2"
        handleClick={handleClick}
      />
      <Button
        name="num"
        char="3"
        handleClick={handleClick}
      />
      <Button
        name="operator"
        char="+"
        handleClick={handleClick}
      />
      <Button
        name="zero"
        char="0"
        handleClick={handleClick}
      />
      <Button
        name="num"
        char="."
        handleClick={handleClick}
      />
      <Button
        name="operator"
        char="="
        handleClick={handleClick}
      />
    </div>
  )
}

export default Calculator;