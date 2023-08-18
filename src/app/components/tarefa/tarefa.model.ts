export interface TarefasAtivas{
    id_tarefa?: number,
    nome: string,
    descricao: string,
    fk_id_cliente: number,
    fk_id_funcionario: number,
    data_limite: '',
    nome_funcionario?: string,
    nome_cliente?: string
    horario?: ''
}