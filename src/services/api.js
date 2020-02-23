import axios from 'axios';

class Api {
  constructor() {
    this.url = 'http://localhost:3333/';
    this.axios = axios.create({
      baseURL: this.url
    });
    this.endpoints = this.loadApis();
  }

  loadApis = () => {
    return {
      // Auth
      login: form => this.axios.post('api/login', form),
      validate: token => this.axios.post('api/validate', token),

      // Users
      getUser: userId => this.axios.get(`api/users/${userId}`),
      createUser: user => this.axios.post('api/users', user),

      // Accounts
      listAccounts: userId => this.axios.get(`api/accounts/${userId}/user`),
      createAccount: (userId, account) => this.axios.post(`api/accounts/${userId}`, account),
      editAccount: (accountId, data) => this.axios.put(`api/accounts/${accountId}`, data),
      deleteAccount: accountId => this.axios.delete(`api/accounts/${accountId}`),

      // Transactions
      listTransactions: userId => this.axios.get(`api/transactions/${userId}/user`),
      createTransaction: transaction => this.axios.post('api/transactions', transaction),
      getTransactionsAmount: userId => this.axios.get(`api/transactions/${userId}/amount`),

      // Categories
      listCategories: type => this.axios.get(`api/categories`, { params: { type } }),
    };
  };
}

const api = new Api();

export default api;
