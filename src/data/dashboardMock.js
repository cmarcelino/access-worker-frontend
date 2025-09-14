export const dashboardData = {
  totalSolicitacoes: 147,
  leadTimeMedio: '4.2 dias',
  taxaAprovacao: '94%',
  reprovacoesUnicas: 3,
  statusFluxo: [
    {
      etapa: 'Aguardando Solicitação',
      descricao: 'Solicitação pendente preenchimento inicial',
      quantidade: 3,
    },
    {
      etapa: 'Comissão de Acesso',
      descricao: 'Solicitação enviada para a Brigada de acesso',
      quantidade: 5,
    },
    {
      etapa: 'Aguardando Gestor',
      descricao: 'Solicitação aguardando ação do gestor responsável',
      quantidade: 10,
    },
    {
      etapa: 'Validação Final',
      descricao: 'Solicitação aguardando validação final',
      quantidade: 1,
    },
  ],
  solicitacoesRecentes: [
    {
      nome: 'Júlia Silva',
      etapa: 'Aguardando Gestor',
      status: 'Em andamento',
      data: '13/09/2025',
    },
    {
      nome: 'Maria Santos',
      etapa: 'Comissão de Acesso',
      status: 'Em andamento',
      data: '12/09/2025',
    },
    {
      nome: 'Carlos Lima',
      etapa: 'Validação Final',
      status: 'Concluído',
      data: '10/09/2025',
    },
  ],
}
