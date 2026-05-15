import { View, Text, StyleSheet, ScrollView, TextInput, Button } from 'react-native'
import { useState } from 'react';

export default function ProjetosScreen() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const projetos = [
    {
      id: 1,
      titulo: 'App de Tarefas',
      descricao: 'Aplicativo para gerenciamento de tarefas diárias com persistência local.',
      tecnologias: 'React Native, AsyncStorage',
    },
    {
      id: 2,
      titulo: 'Calculadora Avançada',
      descricao: 'Calculadora com histórico de operações e temas personalizados.',
      tecnologias: 'React Native, StyleSheet',
    },
  ];

  const handleEnviar = () => {
    if (nome && email && mensagem) {
      alert('Mensagem enviada com sucesso! Entre em contato em breve.');
      setNome('');
      setEmail('');
      setMensagem('');
    } else {
      alert('Por favor, preencha todos os campos!');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.emoji}>📁</Text>
        <Text style={styles.title}>Meus Projetos</Text>
      </View>

      <View style={styles.projectsContainer}>
        {projetos.map((projeto) => (
          <View key={projeto.id} style={styles.projectCard}>
            <Text style={styles.projectTitle}>{projeto.titulo}</Text>
            <Text style={styles.projectDescription}>{projeto.descricao}</Text>
            <View style={styles.techContainer}>
              <Text style={styles.techLabel}>Tecnologias:</Text>
              <Text style={styles.techValue}>{projeto.tecnologias}</Text>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.contactSection}>
        <Text style={styles.contactTitle}>Entre em Contato</Text>
        
        <View style={styles.form}>
          <Text style={styles.label}>Nome</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu nome"
            placeholderTextColor="#999"
            value={nome}
            onChangeText={setNome}
          />

          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="seu@email.com"
            placeholderTextColor="#999"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />

          <Text style={styles.label}>Mensagem</Text>
          <TextInput
            style={[styles.input, styles.messageInput]}
            placeholder="Escreva sua mensagem..."
            placeholderTextColor="#999"
            multiline
            numberOfLines={4}
            value={mensagem}
            onChangeText={setMensagem}
          />

          <View style={styles.buttonContainer}>
            <Button
              title="Enviar Contato"
              onPress={handleEnviar}
              color="#333"
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    alignItems: 'center',
    paddingVertical: 24,
    backgroundColor: '#f5f5f5',
  },
  emoji: {
    fontSize: 48,
    marginBottom: 12,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: '#333',
  },
  projectsContainer: {
    padding: 16,
  },
  projectCard: {
    backgroundColor: '#fff',
    borderRadius: 6,
    padding: 16,
    marginBottom: 16,
    borderBottomWidth: 2,
    borderBottomColor: '#e0e0e0',
  },
  projectTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  projectDescription: {
    fontSize: 14,
    color: '#475569',
    marginBottom: 12,
    lineHeight: 20,
  },
  techContainer: {
    backgroundColor: '#f0f0f0',
    borderRadius: 6,
    padding: 8,
  },
  techLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#333',
  },
  techValue: {
    fontSize: 12,
    color: '#64748b',
    marginTop: 4,
  },
  contactSection: {
    backgroundColor: '#fff',
    margin: 12,
    padding: 16,
    borderRadius: 6,
    marginBottom: 32,
  },
  contactTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
    marginTop: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    color: '#000',
    backgroundColor: '#fff',
  },
  messageInput: {
    textAlignVertical: 'top',
    paddingVertical: 12,
  },
  buttonContainer: {
    marginTop: 16,
    marginBottom: 8,
  },
});
