function UploadButton({ onUploadSuccess }) {
  const handleFileUpload = async (event) => {
    const file = event.target.files[0];

    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch(
        "http://localhost:5000/api/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();

      if (!response.ok) {
        alert(result.error || "Upload failed.");
        event.target.value = "";
        return;
      }

      alert(result.message);

      if (onUploadSuccess) {
        onUploadSuccess();
      }

      event.target.value = "";
    } catch (error) {
      console.error("Upload Error:", error);
      alert("File upload failed.");
    }
  };

  return (
    <label className="upload-btn">
      📤 Upload File

      <input
        type="file"
        accept=".csv,.xlsx,.xls,.json"
        hidden
        onChange={handleFileUpload}
      />
    </label>
  );
}

export default UploadButton;