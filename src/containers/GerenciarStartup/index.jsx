import React, { useState } from 'react'
import { PageContainer, PageHeader, PageTitle, PageSubtitle, DetailCard, Row, Label, Value, TagList, Tag, FormCard, VideoBox, DocList, DocItem } from './styles'
import { Form, Input, Textarea, Button } from '../../components/Auth/AuthStyles'

export default function GerenciarStartup() {
  const dados = {
    nome: 'Startup X',
    descricao: 'Plataforma SaaS para gestão financeira de pequenas empresas com foco em automação de fluxos.',
    fase: 'Seed',
    risco: 'Médio',
    categoria: 'SaaS'
  }
  const [form, setForm] = useState({
    nome: dados.nome,
    descricao: dados.descricao,
    categoria: dados.categoria,
    fase: dados.fase,
    risco: dados.risco,
    videoUrl: ''
  })
  const [docs, setDocs] = useState([])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleDocsChange = (e) => {
    const files = Array.from(e.target.files || [])
    setDocs(files)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Dados salvos (simulado).')
  }
  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>{dados.nome}</PageTitle>
        <PageSubtitle>{dados.descricao}</PageSubtitle>
      </PageHeader>
      <DetailCard>
        <Row>
          <Label>Categoria</Label>
          <Value>{dados.categoria}</Value>
        </Row>
        <Row>
          <Label>Fase</Label>
          <Value>{dados.fase}</Value>
        </Row>
        <Row>
          <Label>Risco</Label>
          <Value>{dados.risco}</Value>
        </Row>
        <TagList>
          <Tag>SaaS</Tag>
          <Tag>Seed</Tag>
          <Tag>Risco Médio</Tag>
        </TagList>
      </DetailCard>

      <FormCard>
        <Form onSubmit={handleSubmit}>
          <Input name="nome" type="text" placeholder="Nome da startup" value={form.nome} onChange={handleChange} />
          <Textarea name="descricao" placeholder="Descrição" value={form.descricao} onChange={handleChange} />
          <Input name="categoria" type="text" placeholder="Categoria" value={form.categoria} onChange={handleChange} />
          <Input name="fase" type="text" placeholder="Fase" value={form.fase} onChange={handleChange} />
          <Input name="risco" type="text" placeholder="Risco" value={form.risco} onChange={handleChange} />
          <Input name="videoUrl" type="url" placeholder="URL do vídeo (mp4 ou YouTube)" value={form.videoUrl} onChange={handleChange} />
          <VideoBox>
            {form.videoUrl ? (
              form.videoUrl.includes('youtube') || form.videoUrl.includes('youtu.be') ? (
                <iframe
                  title="video"
                  width="100%"
                  height="280"
                  src={form.videoUrl.replace('watch?v=', 'embed/')}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <video controls style={{ width: '100%' }}>
                  <source src={form.videoUrl} />
                </video>
              )
            ) : (
              <span>Sem vídeo</span>
            )}
          </VideoBox>
          <Input type="file" multiple onChange={handleDocsChange} accept=".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx" />
          <DocList>
            {docs.map((f, i) => (
              <DocItem key={i}>
                <span>{f.name}</span>
                <span>{Math.round((f.size || 0) / 1024)} KB</span>
              </DocItem>
            ))}
          </DocList>
          <Button type="submit">Salvar alterações</Button>
        </Form>
      </FormCard>
    </PageContainer>
  )
}