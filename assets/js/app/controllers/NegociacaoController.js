class NegociacaoController {

  constructor () {
    const $ = document.querySelector.bind(document)

    this._inputData = $('#data')
    this._inputQuantidade = $('#quantidade')
    this._inputValor = $('#valor')
  }

  adiciona (event) {
    event.preventDefault()

    let data = new Date(
      ...this._inputData.value
        .split('-')
        .map((item, indice) => item - indice % 2)
    )
    let negociacao = new NegociacaoController(
      data,
      this._inputQuantidade,
      this._inputValor
    )
  }
}
