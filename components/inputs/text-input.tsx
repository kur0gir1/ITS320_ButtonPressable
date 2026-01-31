import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

type Props = {
  title: string;
  placeholder?: string;
  onChangeText: (text: string) => void;
  value: string;
  error?: string;
  multiline?: boolean;
  secureTextEntry?: boolean;
};

export default function TextInputComponent({
  title,
  placeholder,
  onChangeText,
  value,
  error,
  multiline = false,
  secureTextEntry = false,
}: Props) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View
        style={[
          styles.inputContainer,
          isFocused && styles.inputContainerFocused,
          error && styles.inputContainerError,
        ]}
      >
        <TextInput
          style={[styles.input, multiline && styles.multilineInput]}
          placeholder={placeholder}
          placeholderTextColor="#888"
          onChangeText={onChangeText}
          value={value}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          multiline={multiline}
          secureTextEntry={secureTextEntry}
          editable={true}
          selectTextOnFocus={true}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="default"
          returnKeyType="done"
          blurOnSubmit={!multiline}
        />
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
    marginBottom: 8,
  },
  inputContainer: {
    backgroundColor: "#1A1A1A",
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#333333",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  inputContainerFocused: {
    borderColor: "#007AFF",
    backgroundColor: "#222222",
  },
  inputContainerError: {
    borderColor: "#FF3B30",
  },
  input: {
    height: 50,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: "#FFFFFF",
    includeFontPadding: false,
  },
  multilineInput: {
    height: 100,
    textAlignVertical: "top",
  },
  errorText: {
    color: "#FF3B30",
    fontSize: 14,
    marginTop: 4,
    marginLeft: 4,
  },
});
