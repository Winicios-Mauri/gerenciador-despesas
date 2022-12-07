import { Item } from '../../types/Item';
import * as C from './styles';

type Props = {
    list: Item[];
}

export const TableArea = ({ list }: Props) => {
    return (
        <C.Table>
            <thead>
                <tr>
                    <C.TableHeadeColumn width={100}>Data</C.TableHeadeColumn>
                    <C.TableHeadeColumn width={130}>Categoria</C.TableHeadeColumn>
                    <C.TableHeadeColumn>Título</C.TableHeadeColumn>
                    <C.TableHeadeColumn width={150}>Valor</C.TableHeadeColumn>
                </tr>
            </thead>
            <tbody>
                {
                    list.map((item, index) => (
                        <tr key={index}>
                            <td>{item.value}</td>
                            <td></td>
                            <td>{item.title}</td>
                            <td></td>
                        </tr>
                    ))
                }
            </tbody>
        </C.Table>
    );
}