import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import Modal from "react-native-modal";
import { useState } from "react";

export default function App() {
  const [ModalSucesso, setModalSucesso] = useState(false);
  const [ModalAdvertencia, setModalAdvertencia] = useState(false);
  const [ModalInformacao, setModalInformacao] = useState(false);

  const modalSucesso = () => {
    setModalSucesso(!ModalSucesso);
  };

  const modalAdvertencia = () => {
    setModalAdvertencia(!ModalAdvertencia);
  };

  const modalInformacao = () => {
    setModalInformacao(!ModalInformacao);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <TouchableOpacity style={styles.botaoSucesso} onPress={modalSucesso}>
        <Text style={styles.text}>Abrir</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoAdvertencia}
        onPress={modalAdvertencia}
      >
        <Text style={styles.text}>Abrir</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoInformacao}
        onPress={modalInformacao}
      >
        <Text style={styles.text}>Abrir</Text>
      </TouchableOpacity>

      <Modal
        isVisible={ModalSucesso}
        animationIn={"jello"}
        animationInTiming={1000}
        animationOut={"slideOutDown"}
        animationOutTiming={1000}
        backdropOpacity={0.7}
      >
        <View style={styles.sucesso}>
          <Image
            source={require("./assets/sucesso.png")}
            style={styles.imagemAviso}
          />
          <Text style={styles.textCaixa}>Sucesso!</Text>
          <TouchableOpacity style={styles.botaoFechar} onPress={modalSucesso}>
            <Text style={styles.text}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <Modal
        isVisible={ModalAdvertencia}
        animationIn={"jello"}
        animationInTiming={1000}
        animationOut={"slideOutDown"}
        animationOutTiming={1000}
        backdropOpacity={0.7}
      >
        <View style={styles.advertencia}>
          <Image
            source={require("./assets/advertencia.png")}
            style={styles.imagemAviso}
          />
          <Text style={styles.textCaixa}>Advertência!</Text>
          <TouchableOpacity
            style={styles.botaoFechar}
            onPress={modalAdvertencia}
          >
            <Text style={styles.text}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <Modal
        isVisible={ModalInformacao}
        animationIn={"jello"}
        animationInTiming={1000}
        animationOut={"slideOutDown"}
        animationOutTiming={1000}
        backdropOpacity={0.7}
      >
        <View style={styles.informacao}>
          <Image
            source={require("./assets/informacao.png")}
            style={styles.imagemAviso}
          />
          <Text style={styles.textCaixa}>Informação!</Text>
          <TouchableOpacity
            style={styles.botaoFechar}
            onPress={modalInformacao}
          >
            <Text style={styles.text}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  botaoSucesso: {
    backgroundColor: "green",
    borderWidth: 3,
    borderRadius: 10,
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
    height: 80,
    width: "80%",
  },
  sucesso: {
    backgroundColor: "green",
    borderWidth: 3,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    height: "80%",
    width: "80%",
    marginLeft: "10%",
  },
  botaoAdvertencia: {
    backgroundColor: "red",
    borderWidth: 3,
    borderRadius: 10,
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
    height: 80,
    width: "80%",
  },
  advertencia: {
    backgroundColor: "#c41d1d",
    borderWidth: 3,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    height: "80%",
    width: "80%",
    marginLeft: "10%",
  },
  botaoInformacao: {
    backgroundColor: "#cfc519",
    borderWidth: 3,
    borderRadius: 10,
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
    height: 80,
    width: "80%",
  },
  informacao: {
    backgroundColor: "#cfc519",
    borderWidth: 3,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    height: "80%",
    width: "80%",
    marginLeft: "10%",
  },
  text: {
    fontSize: 25,
    color: "white",
    alignItems: "center",
  },
  textCaixa: {
    fontSize: 35,
    color: "white",
    marginTop: 10,
  },
  botaoFechar: {
    backgroundColor: "grey",
    borderWidth: 3,
    borderRadius: 10,
    width: "60%",
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
  imagemAviso: {
    height: "31%",
    width: "70%",
    margin: "5%",
  },
});
