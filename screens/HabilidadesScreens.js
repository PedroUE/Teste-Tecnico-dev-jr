import { View, Text, StyleSheet, ScrollView } from 'react-native'

export default function HabilidadesScreen() {
  const habilidades = [
    { id: 1, nome: 'React Native', nivel: 'Intermediário' },
    { id: 2, nome: 'JavaScript', nivel: 'Avançado' },
    { id: 3, nome: 'HTML5 & CSS3', nivel: 'Avançado' },
    { id: 4, nome: 'Trabalho em Equipe', nivel: 'Avançado' },
    { id: 5, nome: 'Comunicação', nivel: 'Intermediário' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.emoji}>💻</Text>
        <Text style={styles.title}>Minhas Habilidades</Text>
      </View>
      
      <View style={styles.content}>
        {habilidades.map((habilidade) => (
          <View key={habilidade.id} style={styles.skillCard}>
            <Text style={styles.skillName}>{habilidade.nome}</Text>
            <Text style={styles.skillLevel}>{habilidade.nivel}</Text>
          </View>
        ))}
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
  content: {
    padding: 16,
  },
  skillCard: {
    backgroundColor: '#fff',
    borderRadius: 6,
    padding: 16,
    marginBottom: 12,
    borderBottomWidth: 2,
    borderBottomColor: '#e0e0e0',
  },
  skillName: {
    fontWeight: '600',
    fontSize: 16,
    color: '#333',
    marginBottom: 4,
  },
  skillLevel: {
    fontSize: 14,
    color: '#64748b',
  },
});