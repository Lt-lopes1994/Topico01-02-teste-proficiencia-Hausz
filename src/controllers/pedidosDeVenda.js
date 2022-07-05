const api = require("../services/api");

const registerOrder = async (req, res) => {
  const {
    cabecalho: {
      codigo_cliente,
      codigo_pedido_integracao,
      data_previsao,
      etapa,
      numero_pedido,
      codigo_parcela,
      quantidade_itens,
    },
    det: [
      {
        ide: { codigo_item_integracao },
        inf_adic: { peso_bruto, peso_liquido },
        produto: {
          cfop,
          codigo_produto,
          descricao,
          ncm,
          quantidade,
          tipo_desconto,
          unidade,
          valor_desconto,
          valor_unitario,
        },
      },
    ],
    frete: { modalidade },
    informacoes_adicionais: {
      codigo_categoria,
      codigo_conta_corrente,
      consumidor_final,
      enviar_email,
    },
    lista_parcelas: {
      parcela: [{ data_vencimento, numero_parcela, percentual, valor }],
    },
  } = req.body;

  try {
    const response = await api.post(`/produtos/pedido/`, {
      call: "IncluirPedido",
      app_key: "2604502062162",
      app_secret: "800f22de690ec41382d0030b92cd1dba",
      param: [
        {
          cabecalho: {
            codigo_cliente,
            codigo_pedido_integracao,
            data_previsao,
            etapa,
            numero_pedido,
            codigo_parcela,
            quantidade_itens,
          },
          det: [
            {
              ide: { codigo_item_integracao },
              inf_adic: { peso_bruto, peso_liquido },
              produto: {
                cfop,
                codigo_produto,
                descricao,
                ncm,
                quantidade,
                tipo_desconto,
                unidade,
                valor_desconto,
                valor_unitario,
              },
            },
          ],
          frete: { modalidade },
          informacoes_adicionais: {
            codigo_categoria,
            codigo_conta_corrente,
            consumidor_final,
            enviar_email,
          },
          lista_parcelas: {
            parcela: [
              {
                data_vencimento,
                numero_parcela,
                percentual,
                valor,
              },
              {
                data_vencimento,
                numero_parcela,
                percentual,
                valor,
              },
            ],
          },
        },
      ],
    });

    return res.json(response.data);
  } catch (error) {
    const errorData = error.response.data;
    return res.status(400).json(errorData.faultstring);
  }
};

const consultOrder = async (req, res) => {
  const { codigo_pedido } = req.body;

  try {
    const response = await api.post(`/produtos/pedido/`, {
      call: "ConsultarPedido",
      app_key: "2604502062162",
      app_secret: "800f22de690ec41382d0030b92cd1dba",
      param: [{ codigo_pedido }],
    });

    return res.json(response.data);
  } catch (error) {
    const errorData = error.response.data;
    return res.status(400).json(errorData.faultstring);
  }
};

const listOrders = async (req, res) => {
  const { pagina, registros_por_pagina } = req.body;

  try {
    const response = await api.post(`/produtos/pedido/`, {
      call: "ListarPedidos",
      app_key: "2604502062162",
      app_secret: "800f22de690ec41382d0030b92cd1dba",
      param: [{ pagina, registros_por_pagina, apenas_importado_api: "N" }],
    });

    return res.json(response.data);
  } catch (error) {
    const errorData = error.response.data;
    return res.status(400).json(errorData.faultstring);
  }
};

module.exports = { registerOrder, consultOrder, listOrders };
