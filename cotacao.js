const cotacao = {
  
    "policyPeriodStart": "2024-11-10",
    "policyPeriodEnd": "2025-11-10",
    "policyType": "Unico",
    "commissionedAgents": [
        {
            "documentNumber": "82931509000112",
            "role": "Broker",
            "commissionPercentage": 0.1,
            "lead": true
        }
    ],
    "participants": [
        {
            "documentNumber": "33286641065",
            "role": "PolicyHolder",
            "main": true,
            "address": {
                "street": "Rua Coronel Camisão",
                "number": "333",
                "district": "Altaneira",
                "city": "Marília",
                "state": "SP",
                "zipCode": "17513080",
                "complement": "Casa",
                "country": "BRA",
                "type": "Residential"
            },
            "contact": {
                "name": "Joao da Silva",
                "email": "joaodasilva123@email.com.br",
                "phoneNumber": "",
                "cellPhoneNumber": "14987192873"
            }
        }
    ],
    "riskObjects": [
        {
            "type": "FiancaLocaticia",
            "planKey": "traditional",
            "multiple": 12,
            "occupation": "Residencial",
            "inhabited": false,
            "tenantDocumentNumber": "33286641065",
            "startLeaseContract": "2024-11-10",
            "endLeaseContract": "2025-11-10",
            "riskLocation": {
                "address": {
                    "street": "Rua Coronel Camisão",
                    "number": "9999",
                    "district": "Altaneira",
                    "city": "Marília",
                    "state": "SP",
                    "zipCode": "17513080",
                    "complement": "Casa PAULO",
                    "country": "BRA",
                    "type": "Residential"
                }
            },
            "coverages": [
                {
                    "key": "basica",
                    "insuredAmount": 12000
                },
                  {
                    "key": "condominio",
                    "insuredAmount": 1200
                  },
                  {
                    "key": "iptu",
                    "insuredAmount": 1200
                  },
                  {
                    "key": "gas",
                    "insuredAmount": 1200
                  },
                  {
                    "key": "agua",
                    "insuredAmount": 1200
                  },
                  {
                    "key": "luz",
                    "insuredAmount": 1200
                  },
                  {
                    "key": "danos",
                    "insuredAmount": 6000
                  },
                  {
                    "key": "pintura",
                    "insuredAmount": 6000
                  },
                  {
                    "key": "multa-rescisao",
                    "insuredAmount": 3000
                  }
            ],
            "expenses": [
                {
                    "description": "VALOR_ALUGUEL",
                    "value": 1000
                },
                {
                    "description": "VALOR_CONDOMINIO",
                    "value": 100
                  },
                  {
                    "description": "VALOR_IPTU",
                    "value": 100
                  },
                  {
                    "description": "VALOR_GAS",
                    "value": 100
                  },
                  {
                    "description": "VALOR_AGUA",
                    "value": 100
                  },
                  {
                    "description": "VALOR_LUZ",
                    "value": 100
                  }
            ]
        }
    ],
    "paymentConditions": {
      "paymentType": "Boleto",
      "installments": 12
    },
    "assistanceServices": [
      {
        "key": "Complete"
      }
    ]
}


console.log(cotacao.policyType);
console.log(cotacao.participants[0].contact.name);
console.log(cotacao.riskObjects[0].coverages[0].key);
console.log(cotacao.paymentConditions.paymentType);