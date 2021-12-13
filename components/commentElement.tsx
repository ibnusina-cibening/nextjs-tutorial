import utilStyles from '../styles/utils.module.css';
import {
    Box,
    Button,
    Avatar,
    Divider,
    ListItem,
    TextField,
    Typography,
    ListItemText,
    ListItemAvatar
} from '@mui/material';
// import FormatDate from '../lib/fromatDate';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import {id} from 'date-fns/locale';

export function InputComment({ disabled, localValue, onChange, comment, id:commentId }: {
    disabled: boolean, localValue: any, onChange: any, comment: any, id:string
}) {
    const timestamp = formatDistanceToNow(
        new Date(comment.createdAt *1000),
        {includeSeconds: true, locale:id}
      )
    return (
        <>{disabled ?
            <ListItemText
                primary={comment.identity.callName}
                primaryTypographyProps={{ variant: 'subtitle1' }}
                secondary={
                    <>
                        <Typography
                            gutterBottom
                            variant="caption"
                            sx={{
                                display: 'block',
                                color: 'text.disabled'
                            }}
                        >
                            {timestamp + ' yang lalu'}
                        </Typography>
                        <Typography component="span" variant="body2">
                            {comment.content}
                        </Typography>
                    </>
                }
            />
            :
            // <textarea
            //     disabled={disabled}
            //     className={utilStyles.textarea}
            //     value={localValue}
            //     onChange={onChange}
            //     id={id}
            // />
            <ListItemText
                // fullWidth
                primary={'name'}
                primaryTypographyProps={{ variant: 'subtitle1' }}
                secondary={
                    <>
                        <Typography
                            gutterBottom
                            variant="caption"
                            sx={{
                                display: 'block',
                                color: 'text.disabled'
                            }}
                        >
                            {'createdAt'}
                        </Typography>
                        <Typography component="span" variant="body2">
                            <strong>{'tagUser'}</strong> {'message'}
                        </Typography>
                    </>
                }
            />
        }
        </>
    )
}

export function ButtonComment({ id:commentId, onClick, name }: { id: any, onClick: any, name: string }) {
    return (
        <button
            id={commentId}
            type="button"
            name={name}
            onClick={onClick}
        >{name}</button>
    )
}

export function InputMain({ formValue, onChange }: { formValue: string, onChange: any }) {
    return (
        <div>
            <textarea
                // className={utilStyles.textarea}
                value={formValue}
                onChange={onChange}
            />
        </div>
    )
}

export function AddComment({ formValue, onChange, handleClick, isLoggedIn }: {
    formValue: string, onChange: any, handleClick: any, isLoggedIn: boolean
}) {
    return (
        <>
            {isLoggedIn &&
                <InputMain
                    formValue={formValue}
                    onChange={onChange}
                />
            }
            {isLoggedIn &&
                <ButtonComment
                    id={2}
                    name="submit"
                    onClick={handleClick}
                />
            }
        </>
    )
}