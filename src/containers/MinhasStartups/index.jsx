import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PageContainer, PageHeader, PageTitle, PageSubtitle, CTAButton, ExampleSection, StartupCard, StartupTitle, StartupDescription, StartupMeta, Tag, ActionRow, ManageButton, CreateFormCard, VideoBox, DocList, DocItem } from './styles'
import { Form, Input, Textarea, Button } from '../../components/Auth/AuthStyles'

export default function MinhasStartups() {
  const navigate = useNavigate()
  const [showCreate, setShowCreate] = useState(false)
  const [createForm, setCreateForm] = useState({ nome: '', descricao: '', categoria: '', fase: '', risco: '', videoUrl: '' })
  const [createDocs, setCreateDocs] = useState([])

  const handleCreateChange = (e) => {
    const { name, value } = e.target
    setCreateForm((prev) => ({ ...prev, [name]: value }))
  }
  const handleCreateDocs = (e) => {
    const files = Array.from(e.target.files || [])
    setCreateDocs(files)
  }
  const handleCreateSubmit = (e) => {
    e.preventDefault()
    alert('Startup criada (simulado).')
    setCreateForm({ nome: '', descricao: '', categoria: '', fase: '', risco: '', videoUrl: '' })
    setCreateDocs([])
    setShowCreate(false)
  }
  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>Minhas startups</PageTitle>
        <PageSubtitle>Gerencie suas startups favoritas e investimentos.</PageSubtitle>
      </PageHeader>
      <CTAButton onClick={() => setShowCreate((v) => !v)}>Criar nova startup</CTAButton>

      {showCreate && (
        <CreateFormCard>
          <Form onSubmit={handleCreateSubmit}>
            <Input name="nome" type="text" placeholder="Nome da startup" value={createForm.nome} onChange={handleCreateChange} />
            <Textarea name="descricao" placeholder="Descrição" value={createForm.descricao} onChange={handleCreateChange} />
            <Input name="categoria" type="text" placeholder="Categoria" value={createForm.categoria} onChange={handleCreateChange} />
            <Input name="fase" type="text" placeholder="Fase" value={createForm.fase} onChange={handleCreateChange} />
            <Input name="risco" type="text" placeholder="Risco" value={createForm.risco} onChange={handleCreateChange} />
            <Input name="videoUrl" type="url" placeholder="URL do vídeo (mp4 ou YouTube)" value={createForm.videoUrl} onChange={handleCreateChange} />
            <VideoBox>
              {createForm.videoUrl ? (
                createForm.videoUrl.includes('youtube') || createForm.videoUrl.includes('youtu.be') ? (
                  <iframe
                    title="video"
                    width="100%"
                    height="280"
                    src={createForm.videoUrl.replace('watch?v=', 'embed/')}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <video controls style={{ width: '100%' }}>
                    <source src={createForm.videoUrl} />
                  </video>
                )
              ) : (
                <span>Sem vídeo</span>
              )}
            </VideoBox>
            <Input type="file" multiple onChange={handleCreateDocs} accept=".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx" />
            <DocList>
              {createDocs.map((f, i) => (
                <DocItem key={i}>
                  <span>{f.name}</span>
                  <span>{Math.round((f.size || 0) / 1024)} KB</span>
                </DocItem>
              ))}
            </DocList>
            <Button type="submit">Salvar nova startup</Button>
          </Form>
        </CreateFormCard>
      )}

      <ExampleSection>
        <StartupCard>
          <StartupTitle>Startup X</StartupTitle>
          <StartupDescription>
            Plataforma SaaS para gestão financeira de pequenas empresas com foco em automação de fluxos.
          </StartupDescription>
          <StartupMeta>
            <Tag>SaaS</Tag>
            <Tag>Fase: Seed</Tag>
            <Tag>Risco: Médio</Tag>
          </StartupMeta>
          <ActionRow>
            <ManageButton onClick={() => navigate('/minhas-startups/gerenciar')}>Gerenciar startup</ManageButton>
          </ActionRow>
        </StartupCard>
      </ExampleSection>
    </PageContainer>
  )
}