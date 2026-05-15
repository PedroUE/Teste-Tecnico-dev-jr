import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'

export default function PerfilScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://avatars.githubusercontent.com/u/202267271?s=400&u=99ea83e04c30fd22a68df63295dfa04bd94c8c85&v=4' }}
          style={styles.avatar}
        />
        <Text style={styles.name}>Pedro Escapalete</Text>
        <Text style={styles.role}>Desenvolvedor Mobile Júnior</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Sobre Mim</Text>
        <Text style={styles.about}>
          Sou um desenvolvedor apaixonado por tecnologia com foco em desenvolvimento mobile com React Native. Estou sempre buscando aprender novas tecnologias e melhores práticas de desenvolvimento.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Informações de Contato</Text>
        <View style={styles.contactItem}>
          <Text style={styles.contactLabel}>📧 Email:</Text>
          <Text style={styles.contactValue}>pedro.escapalete@aluno.senai.br</Text>
        </View>
        <View style={styles.contactItem}>
          <Text style={styles.contactLabel}>🔗 GitHub:</Text>
          <Text style={styles.contactValue}>github.com/pedro</Text>
        </View>
        <View style={styles.contactItem}>
          <Text style={styles.contactLabel}>💼 LinkedIn:</Text>
          <Text style={styles.contactValue}>linkedin.com/in/pedro</Text>
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
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    paddingVertical: 28,
    paddingHorizontal: 16,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
    borderWidth: 3,
    borderColor: '#fff',
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  role: {
    fontSize: 16,
    color: '#666',
  },
  section: {
    backgroundColor: '#fff',
    marginHorizontal: 12,
    marginVertical: 12,
    padding: 16,
    borderRadius: 6,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 12,
  },
  about: {
    fontSize: 14,
    color: '#475569',
    lineHeight: 22,
  },
  contactItem: {
    marginBottom: 12,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  contactLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  contactValue: {
    fontSize: 14,
    color: '#475569',
  },
});