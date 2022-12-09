import { formatCurrentMonth } from '../../helpers/dateFilter';
import { ResumeItem } from '../ResumeItem';
import * as C from './styles';

type Props = {
    currentMonth: string;
    onMonthChange: (newMonth: string) => void;
    income: number;
    expense: number;
}

export const InfoArea = ({ currentMonth, onMonthChange, income, expense }: Props) => {
    let [year, month] = currentMonth.split("-");
    let currentDate = new Date(parseInt(year), parseInt(month) -1, 1);

    const handlePrevMonth = () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() +1 }`)
    }

    const handleNextMonth = () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() +1 }`)
    }



    return (
        <C.Conatiner>
            <C.MonthArea>
                <C.MonthArrow onClick={handlePrevMonth}>⬅️</C.MonthArrow>
                <C.MonthTitle>{formatCurrentMonth(currentMonth)}</C.MonthTitle>
                <C.MonthArrow onClick={handleNextMonth}>➡️</C.MonthArrow>
            </C.MonthArea>

            <C.ResumeArea>
                <ResumeItem title='Receitas' value={income} />  
                <ResumeItem title='Despesas' value={expense} />  
                <ResumeItem 
                    title='Balanço' 
                    value={income - expense} 
                    color={(income - expense) < 0 ? 'red' : 'green'}
                />  
            </C.ResumeArea>
        </C.Conatiner>
    );
}