import utilStyles from '../styles/utils.module.css';

export function InputComment({ disabled, localValue, onChange, id }) {
    return (
        <textarea
            disabled={disabled}
            className={utilStyles.textarea}
            value={localValue}
            onChange={onChange}
            id={id}
        />
    )
}

export function ButtonComment ({id, onClick, name}) {
    return (
        <button
            id ={id}
            type="button"
            name={name}
            onClick={onClick}
        >{name}</button>
    )
}