const api = require("../services/api");

const registerCustomer = async (req, res) => {
  const {
    codigo_cliente_integracao,
    email,
    razao_social,
    nome_fantasia,
    cnpj_cpf,
  } = req.body;

  if (
    !codigo_cliente_integracao ||
    !email ||
    !razao_social ||
    !nome_fantasia ||
    !cnpj_cpf
  ) {
    return res.status(400).json({
      error: "Todos os campos são obrigatórios",
    });
  }

  try {
    const response = await api.post(`/geral/clientes/`, {
      call: "IncluirCliente",
      app_key: "2604502062162",
      app_secret: "800f22de690ec41382d0030b92cd1dba",
      param: [
        {
          codigo_cliente_integracao,
          email,
          razao_social,
          nome_fantasia,
          cnpj_cpf,
        },
      ],
    });

    return res.json(response);
  } catch (error) {
    const errorData = error.response.data;
    return res.status(400).json(errorData.faultstring);
  }
};

const getCustomer = async (req, res) => {
  const {
    codigo_cliente_omie,
    codigo_cliente_integracao,
    razao_social,
    nome_fantasia,
    cnpj_cpf,
  } = req.body;

  if (!codigo_cliente_omie && !codigo_cliente_integracao) {
    return res.status(400).json({
      error:
        "Informe no mínimo um dos campos: codigo_cliente ou codigo_cliente_integracao",
    });
  }

  try {
    const response = await api.post(`/geral/clientes/`, {
      call: "ConsultarCliente",
      app_key: "2604502062162",
      app_secret: "800f22de690ec41382d0030b92cd1dba",
      param: [
        {
          codigo_cliente_omie: codigo_cliente_omie || 0,
          codigo_cliente_integracao: codigo_cliente_integracao || "",
        },
      ],
    });

    return res.json(response.data);
  } catch (error) {
    const errorData = error.response.data;
    return res.status(400).json(errorData.faultstring);
  }
};

const listCostumers = async (req, res) => {
  const { pagina, registros_por_pagina } = req.body;

  if (!pagina || !registros_por_pagina) {
    return res.status(400).json({
      error: "Todos os campos são obrigatórios",
    });
  }

  try {
    const response = await api.post(`/geral/clientes/`, {
      call: "ListarClientes",
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

const deleteCustomer = async (req, res) => {
  const { codigo_cliente_omie, codigo_cliente_integracao } = req.body;

  try {
    const response = await api.post(`/geral/clientes/`, {
      call: "ExcluirCliente",
      app_key: "2604502062162",
      app_secret: "800f22de690ec41382d0030b92cd1dba",
      param: [
        {
          codigo_cliente_omie: codigo_cliente_omie || 0,
          codigo_cliente_integracao: codigo_cliente_integracao || "",
        },
      ],
    });

    return res.json(response);
  } catch (error) {
    const errorData = error.response.data;
    return res.status(400).json(errorData.faultstring);
  }
};

module.exports = {
  registerCustomer,
  getCustomer,
  listCostumers,
  deleteCustomer,
};
