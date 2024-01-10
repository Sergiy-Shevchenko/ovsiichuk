import Icons from '../../image/symbol-defs.svg'

export const Icon = ({ id, className }) => {
    return (
      <svg className={className}>
        <use href={Icons + '#' + id}></use>
      </svg>
    );
  };