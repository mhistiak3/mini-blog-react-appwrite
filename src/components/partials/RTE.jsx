import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";
import { VITE_TINY_MCE_API_KEY } from "../../config";

export const RTE = ({ name, control, label, defaultValue = "" }) => {
  return (
    <div className="w-full">
      {label && (
        <label className="inline-block font-medium text-gray-800 mb-1">
          {label}
        </label>
      )}
      <Controller
        name={name || "content"}
        control={control}
        render={({ field: { onChange } }) => (
          <Editor
            apiKey={VITE_TINY_MCE_API_KEY}
            onEditorChange={(content) => onChange(content)}
            initialValue={defaultValue}
            init={{
              height: 500,
              menubar: false,
              plugins: [
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",

                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",

                "code",
                "help",
                "wordcount",
              ],
              toolbar:
                "undo redo | bold italic | bullist numlist | link image | code",

              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:16px }",
            }}
          />
        )}
      />
    </div>
  );
};
