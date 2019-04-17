import * as React from 'react';

export interface ICountProps {
    initialCount?: number;
}

export const UseState1: React.FunctionComponent<ICountProps> = ({ initialCount = 0 }) => {
    const [clicks, setClicks] = React.useState<number>(initialCount);
    
    return <>
        <p>Clicks: {clicks}</p>
        <button onClick={() => setClicks(clicks+1)}>+</button>
        <button onClick={() => setClicks(clicks-1)}>-</button>
    </>
};

// ----

export interface IUserProps {
    initialUser: IUser | null;
}

export interface IUser {
    username: string;
    email:  string;
    password: string;
}

export const UseState2: React.FunctionComponent<IUserProps> = ({ initialUser = null}) => {
    const [user, setUser] = React.useState<IUser | null>(initialUser);

    return <>
        {!user && (<div>Nerastas naudotojas</div>)}
        {user && (
            <form>
                <input value={user.username} onChange={e => setUser({...user, username: e.target.value})} />
                <input value={user.email} onChange={e => setUser({...user, email: e.target.value})} />
                <input value={user.password} onChange={e => setUser({...user, password: e.target.value})} />
            </form>  
        )}
    </>
}

// ----

export const UseState3: React.FunctionComponent = () => {
    const [age, setAge] = React.useState(42);
    const [fruit, setFruit] = React.useState('banana');
    const [todos, setTodos] = React.useState([{ text: 'Learn Hooks' } as TodoItem]);

    return <>
        <p>Metai: {age} </p>
        <p>Vaisius: {fruit}</p>
        <p>Darbų sąrašas: {todos.map((x, i) => <span key={i}>{x.text},</span>)} kartus</p>
    </>
};

interface TodoItem {
    text: string;
}