const scripts = {
    code1: `import os
from pydub import AudioSegment

def convert_to_mp3(input_file, output_file):
# Load audio file
audio = AudioSegment.from_file(input_file)

# Export audio in MP3 format
audio.export(output_file, format="mp3")
print(f"Converted {input_file} to {output_file}")

def batch_convert_to_mp3(input_folder, output_folder):
# Create output folder if it doesn't exist
if not os.path.exists(output_folder):
    os.makedirs(output_folder)

# Iterate through each file in the input folder
for filename in os.listdir(input_folder):
    if filename.endswith(".webm"):  # Adjust the file extension
        input_file = os.path.join(input_folder, filename)
        output_file = os.path.join(output_folder, filename.replace(".webm", ".mp3")) # Change file extension
        convert_to_mp3(input_file, output_file)

# Example usage
input_folder = input("Enter folder: ")
output_folder = input("Enter folder: ")
batch_convert_to_mp3(input_folder, output_folder)`,

    code2: `import os
from PyPDF2 import PdfReader

def count_pages_in_pdf(file_path):
try:
    with open(file_path, 'rb') as pdf_file:
        pdf_reader = PdfReader(pdf_file)
        return len(pdf_reader.pages)
except Exception as e:
    print(f"Error reading {file_path}: {e}")
    return 0

def count_total_pages(pdf_files):
total_pages = 0
for pdf_file in pdf_files:
    total_pages += count_pages_in_pdf(pdf_file)
return total_pages

def get_pdf_files_from_directory(directory):
pdf_files = []
for filename in os.listdir(directory):
    if filename.lower().endswith('.pdf'):
        pdf_files.append(os.path.join(directory, filename))
return pdf_files

if __name__ == "__main__":
directory = input("Enter the directory path containing PDF files: ")
pdf_files = get_pdf_files_from_directory(directory)

if not pdf_files:
    print("No PDF files found in the specified directory.")
else:
    total_pages = count_total_pages(pdf_files)
    print(f"Total number of pages in all PDF files: {total_pages}")`,

    code3: `import PyPDF2
import tkinter as tk
from tkinter import filedialog
import os

def merge_pdfs(pdf_files, output_file):
pdf_merger = PyPDF2.PdfMerger()

for pdf_file in pdf_files:
    with open(pdf_file, 'rb') as file:
        pdf_merger.append(file)

with open(output_file, 'wb') as output:
    pdf_merger.write(output)

print("PDFs merged successfully into", output_file)

def select_files():
root = tk.Tk()
root.withdraw()
file_paths = filedialog.askopenfilenames(filetypes=[("PDF files", "*.pdf")])
return list(file_paths)

if __name__ == "__main__":
pdf_files_to_merge = select_files()

if len(pdf_files_to_merge) < 2:
    print("Error: You must select at least two PDF files to merge.")
else:
    output_file = input("Enter the name of the output merged PDF file: ")
    if not output_file.endswith('.pdf'):
        output_file += '.pdf'
    merge_pdfs(pdf_files_to_merge, output_file)`,

    code4: `import os
from comtypes import client

def convert_doc_to_pdf(input_doc, output_pdf):
word = client.CreateObject("Word.Application")
word.Visible = True

doc = word.Documents.Open(input_doc)
doc.SaveAs(output_pdf, FileFormat=17)  # 17 represents PDF format
doc.Close()

word.Quit()

def batch_convert_docs_to_pdfs(input_folder, output_folder):
if not os.path.exists(output_folder):
    os.makedirs(output_folder)

for filename in os.listdir(input_folder):
    if filename.endswith(".docx") or filename.endswith(".doc"):
        input_path = os.path.join(input_folder, filename)
        output_path = os.path.join(output_folder, os.path.splitext(filename)[0] + ".pdf")
        convert_doc_to_pdf(input_path, output_path)

# Prompt the user to input the input and output folders
input_folder = input("Enter the input folder path: ")
output_folder = input("Enter the output folder path: ")

# Call the function to batch convert DOC to PDF
batch_convert_docs_to_pdfs(input_folder, output_folder)`,

    code5: `# script to convert ppt into pdf

import os
from comtypes import client


def convert_ppt_to_pdf(input_ppt, output_pdf):
powerpoint = client.CreateObject("PowerPoint.Application")
powerpoint.Visible = True

ppt = powerpoint.Presentations.Open(input_ppt)
ppt.SaveAs(output_pdf, 32)  # 32 represents PDF format
ppt.Close()

powerpoint.Quit()


def batch_convert_ppts_to_pdfs(input_folder, output_folder):
if not os.path.exists(output_folder):
    os.makedirs(output_folder)

for filename in os.listdir(input_folder):
    if filename.endswith(".pptx") or filename.endswith(".ppt"):
        input_path = os.path.join(input_folder, filename)
        output_path = os.path.join(output_folder, os.path.splitext(filename)[0] + ".pdf")
        convert_ppt_to_pdf(input_path, output_path)


# Prompt the user to input the input and output folders
input_folder = input("Enter the input folder path: ")
output_folder = input("Enter the output folder path: ")

# Call the function to batch convert PPT to PDF
batch_convert_ppts_to_pdfs(input_folder, output_folder)`,

    code6: `import yt_dlp

def download_playlist(playlist_url):
try:
    options = {
        'format': 'bestaudio/best',
        'outtmpl': '%(title)s.%(ext)s',
        'merge_output_format': None,  # Skip merging
        'noplaylist': False,
    }

    with yt_dlp.YoutubeDL(options) as ydl:
        ydl.download([playlist_url])

    print("Download complete!")
except yt_dlp.DownloadError as e:
    for err in e.exc_info:
        if isinstance(err, yt_dlp.utils.ExtractorError) and 'unavailable' in str(err):
            print("Skipped unavailable audio.")
        else:
            print(f"An error occurred: {err}")
            continue

# Replace 'YOUR_PLAYLIST_URL' with the actual URL of the playlist you want to download
playlist_url = input("Enter playlist url: ")
download_playlist(playlist_url)`,

    code7: `import tkinter as tk
from tkinter import filedialog
from PyPDF2 import PdfReader, PdfWriter
import os

def compress_pdf(input_path, output_path):
with open(input_path, 'rb') as file:
    reader = PdfReader(file)
    writer = PdfWriter()

    for page in reader.pages:
        writer.add_page(page)

    with open(output_path, 'wb') as output_file:
        writer.write(output_file)

def select_input_file():
input_file_path = filedialog.askopenfilename(filetypes=[("PDF files", "*.pdf")])
input_file_entry.delete(0, tk.END)
input_file_entry.insert(tk.END, input_file_path)
set_default_output(input_file_path)

def set_default_output(input_file_path):
output_directory = os.path.dirname(input_file_path)
base_name = os.path.basename(input_file_path)
output_file_path = os.path.join(output_directory, os.path.splitext(base_name)[0] + "_compressed.pdf")
output_file_entry.delete(0, tk.END)
output_file_entry.insert(tk.END, output_file_path)

def compress():
input_path = input_file_entry.get()
output_path = output_file_entry.get()

if input_path and output_path:
    compress_pdf(input_path, output_path)
    status_label.config(text="PDF compression completed successfully.")
else:
    status_label.config(text="Please select input file.")

# Create the main window
root = tk.Tk()
root.title("PDF Compressor")

# Create input file selection widgets
input_file_label = tk.Label(root, text="Select Input PDF File:")
input_file_label.grid(row=0, column=0, padx=5, pady=5)

input_file_entry = tk.Entry(root, width=50)
input_file_entry.grid(row=0, column=1, padx=5, pady=5)

input_file_button = tk.Button(root, text="Browse", command=select_input_file)
input_file_button.grid(row=0, column=2, padx=5, pady=5)

# Create output file entry widgets
output_file_label = tk.Label(root, text="Output PDF File:")
output_file_label.grid(row=1, column=0, padx=5, pady=5)

output_file_entry = tk.Entry(root, width=50)
output_file_entry.grid(row=1, column=1, padx=5, pady=5)

# Create compress button
compress_button = tk.Button(root, text="Compress PDF", command=compress)
compress_button.grid(row=2, column=1, padx=5, pady=10)

# Create status label
status_label = tk.Label(root, text="")
status_label.grid(row=3, column=1, padx=5, pady=5)

# Start the Tkinter event loop
root.mainloop()`,
    code8: `import os
import tkinter as tk
from tkinter import filedialog, messagebox
from PIL import Image
from fpdf import FPDF

# Function to select images and add to list
def select_images():
    files = filedialog.askopenfilenames(filetypes=[("Image Files", "*.jpg;*.jpeg;*.png;*.gif")])
    for file in files:
        if file not in selected_images:
            selected_images.append(file)
            listbox.insert(tk.END, os.path.basename(file))

# Function to remove selected image from list
def remove_selected_image():
    selected = listbox.curselection()
    if selected:
        index = selected[0]
        listbox.delete(index)
        del selected_images[index]

# Function to create PDF from selected images
def create_pdf():
    if not selected_images:
        messagebox.showerror("Error", "No images selected")
        return
    
    pdf = FPDF()
    for image_path in selected_images:
        image = Image.open(image_path)
        image_width, image_height = image.size
        pdf.add_page()
        pdf.image(image_path, 0, 0, pdf.w, pdf.h * (image_height / image_width))
    
    save_path = filedialog.asksaveasfilename(defaultextension=".pdf", filetypes=[("PDF Files", "*.pdf")])
    if save_path:
        pdf.output(save_path)
        messagebox.showinfo("Success", f"PDF saved successfully at {save_path}")

# Initialize main window
root = tk.Tk()
root.title("Image to PDF Converter")

selected_images = []

# Frame for listbox and scrollbar
frame = tk.Frame(root)
frame.pack(pady=10)

# Listbox to display selected images
listbox = tk.Listbox(frame, selectmode=tk.SINGLE, width=50, height=15)
listbox.pack(side=tk.LEFT, padx=(0, 10))

# Scrollbar for listbox
scrollbar = tk.Scrollbar(frame, orient=tk.VERTICAL, command=listbox.yview)
scrollbar.pack(side=tk.LEFT, fill=tk.Y)
listbox.config(yscrollcommand=scrollbar.set)

# Buttons for selecting, removing, and creating PDF
button_frame = tk.Frame(root)
button_frame.pack(pady=10)

select_button = tk.Button(button_frame, text="Select Images", command=select_images)
select_button.pack(side=tk.LEFT, padx=10)

remove_button = tk.Button(button_frame, text="Remove Selected Image", command=remove_selected_image)
remove_button.pack(side=tk.LEFT, padx=10)

create_pdf_button = tk.Button(button_frame, text="Create PDF", command=create_pdf)
create_pdf_button.pack(side=tk.LEFT, padx=10)

# Run the main event loop
root.mainloop()
`
  };

  function showCode(codeId) {
    document.getElementById("code").textContent = scripts[codeId];
    document.getElementById("code-container").style.display = "block";
  }

  function copyCode() {
    const codeElement = document.getElementById("code");
    const range = document.createRange();
    range.selectNode(codeElement);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    alert("Code copied to clipboard!");
  }
  function refreshPage() {
    location.reload();
  }