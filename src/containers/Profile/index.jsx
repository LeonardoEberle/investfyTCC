import React, { useState } from 'react'
import {
  Card,
  Title,
  Form,
  Input,
  Textarea,
  Button,
} from '../../components/Auth/AuthStyles'
import { 
  ProfileContainer, 
  InfoCard, 
  InfoHeader, 
  AvatarPlaceholder, 
  UserName,
  UserEmail,
  InfoSection,
  InfoSectionTitle,
  InfoGrid, 
  InfoItem,
  InfoLabel, 
  InfoValue, 
  BioText
} from './styles' 
import { HiOutlineUser, HiOutlineMail, HiOutlineCalendar, HiOutlineLocationMarker, HiOutlinePhone, HiOutlineInformationCircle, HiOutlineIdentification, HiOutlineDocumentText } from 'react-icons/hi' 

export default function Profile() {
  const [form, setForm] = useState({
    nome: 'Nome',
    sobrenome: 'Sobrenome',
    nascimento: '01/01/1990',
    codigoPostal: '00000-000',
    telefone: '(00) 00000-0000',
    sobreMim: 'Usuário da plataforma Investify.',
    cpf: '000.000.000-00',
    rg: '00.000.000-0'
  })

  const profileData = {
    name: "Nome Sobrenome",
    email: "usuario@email.com",
    birthDate: "01/01/1990",
    location: "Cidade, Estado", 
    phone: "(00) 00000-0000",
    bio: "Usuário da plataforma Investify, interessado em finanças e tecnologia.",
    cpf: "XXX.XXX.XXX-XX", 
    rg: "XX.XXX.XXX-X"     
  }

  const formatDateDDMMYYYY = (value) => {
    const digits = value.replace(/\D/g, '').slice(0, 8)
    const dd = digits.slice(0, 2)
    const mm = digits.slice(2, 4)
    const yyyy = digits.slice(4, 8)
    let result = ''
    if (dd) result = dd
    if (mm) result += '/' + mm
    if (yyyy) result += '/' + yyyy
    return result
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === 'nascimento') {
      setForm((prev) => ({ ...prev, nascimento: formatDateDDMMYYYY(value) }))
      return
    }
     if (name === 'cpf') {
      const masked = value.replace(/\D/g, '')
                          .replace(/(\d{3})(\d)/, '$1.$2')
                          .replace(/(\d{3})(\d)/, '$1.$2')
                          .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
      setForm((prev) => ({ ...prev, [name]: masked.slice(0, 14) }));
      return;
    }
     if (name === 'rg') {
      const masked = value.replace(/\D/g, '')
                          .replace(/(\d{2})(\d)/, '$1.$2')
                          .replace(/(\d{3})(\d)/, '$1.$2')
                          .replace(/(\d{3})([a-zA-Z0-9]{1})$/, '$1-$2');
      setForm((prev) => ({ ...prev, [name]: masked.slice(0, 12) }));
      return;
    }
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Editar perfil:', form)
    alert('Dados do perfil (simulado) atualizados.') 
  }

  return (
    <ProfileContainer> 
      
      <InfoCard style={{ flex: 1.2 }}> 
        <InfoHeader>
          <AvatarPlaceholder>
             <HiOutlineUser size={32} /> 
          </AvatarPlaceholder>
          <div>
            <UserName>{profileData.name}</UserName>
            <UserEmail>{profileData.email}</UserEmail>
          </div>
        </InfoHeader>

        <InfoSection>
          <InfoSectionTitle>Sobre Mim</InfoSectionTitle>
          <BioText>{profileData.bio || "Nenhuma informação."}</BioText>
        </InfoSection>

        <InfoSection>
          <InfoSectionTitle>Informações Pessoais</InfoSectionTitle>
          <InfoGrid>
            <InfoItem>
              <HiOutlineCalendar size={18} />
              <div>
                 <InfoLabel>Nascimento:</InfoLabel>
                 <InfoValue>{profileData.birthDate || "Não informado"}</InfoValue>
              </div>
            </InfoItem>
            <InfoItem>
              <HiOutlineLocationMarker size={18} />
               <div>
                  <InfoLabel>Localização:</InfoLabel>
                  <InfoValue>{profileData.location || "Não informada"}</InfoValue>
               </div>
            </InfoItem>
            <InfoItem>
              <HiOutlinePhone size={18} />
               <div>
                  <InfoLabel>Telefone:</InfoLabel>
                  <InfoValue>{profileData.phone || "Não informado"}</InfoValue>
               </div>
            </InfoItem>
             <InfoItem>
              <HiOutlineIdentification size={18} />
               <div>
                  <InfoLabel>CPF:</InfoLabel>
                  <InfoValue>{profileData.cpf}</InfoValue> 
               </div>
            </InfoItem>
             <InfoItem>
              <HiOutlineDocumentText size={18} />
               <div>
                  <InfoLabel>RG:</InfoLabel>
                  <InfoValue>{profileData.rg}</InfoValue> 
               </div>
            </InfoItem>
          </InfoGrid>
        </InfoSection>
      </InfoCard>

      <Card style={{ flex: 1 }}> 
        <Title>Editar Informações</Title> 
        <Form onSubmit={handleSubmit}> 
          <Input 
            type="text" name="nome" placeholder="Nome" 
            value={form.nome} onChange={handleChange} autoComplete="given-name" 
          />
          <Input 
            type="text" name="sobrenome" placeholder="Sobrenome" 
            value={form.sobrenome} onChange={handleChange} autoComplete="family-name" 
          />
          <Input 
            type="text" name="nascimento" placeholder="Data de nascimento (dd/mm/yyyy)" 
            value={form.nascimento} onChange={handleChange} inputMode="numeric" 
            autoComplete="bday" pattern="\d{2}/\d{2}/\d{4}" title="Formato dd/mm/yyyy" 
          />
          <Input 
            type="text" name="codigoPostal" placeholder="CEP" 
            value={form.codigoPostal} onChange={handleChange} autoComplete="postal-code" 
          />
          <Input 
            type="tel" name="telefone" placeholder="Telefone (com DDD)" 
            value={form.telefone} onChange={handleChange} autoComplete="tel" 
          />
          <Textarea 
            name="sobreMim" placeholder="Conte um pouco sobre você..." 
            value={form.sobreMim} onChange={handleChange} autoComplete="off" 
          />
          <Input 
            type="text" name="cpf" placeholder="CPF (xxx.xxx.xxx-xx)" 
            value={form.cpf} onChange={handleChange} inputMode="numeric" autoComplete="off" 
            maxLength="14"
          />
          <Input 
            type="text" name="rg" placeholder="RG (xx.xxx.xxx-x)" 
            value={form.rg} onChange={handleChange} inputMode="text" autoComplete="off" 
             maxLength="12"
          />
          <Button type="submit">Salvar Alterações</Button> 
        </Form>
      </Card>

    </ProfileContainer>
  )
}