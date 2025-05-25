import React, { useEffect, useRef } from 'react';

function EmailDiv() {
  const bodyRef = useRef(null);
  const signatureRef = useRef(null);

  useEffect(() => {
    const $ = window.$;  // use the globally loaded jQuery from CDN

    if ($ && $.fn && $.fn.summernote) {
      $(bodyRef.current).summernote({
        height: 300,
        placeholder: 'Write your message here...',
        toolbar: [
          ['style', ['style']],
          ['font', ['bold', 'italic', 'underline', 'clear']],
          ['fontname', ['fontname']],
          ['fontsize', ['fontsize']],
          ['color', ['color']],
          ['para', ['ul', 'ol', 'paragraph']],
          ['insert', ['link', 'picture', 'video']],
          ['view', ['fullscreen', 'codeview', 'help']],
        ],
      });

      $(signatureRef.current).summernote({
        height: 150,
        placeholder: 'Your signature here...',
        toolbar: [
          ['font', ['bold', 'italic', 'underline', 'clear']],
          ['color', ['color']],
          ['para', ['ul', 'ol', 'paragraph']],
          ['view', ['fullscreen', 'codeview']],
        ],
      });
    } else {
      console.error('jQuery or Summernote not loaded');
    }

    // Cleanup
    return () => {
      if ($ && $.fn && $.fn.summernote) {
        $(bodyRef.current).summernote('destroy');
        $(signatureRef.current).summernote('destroy');
      }
    };
  }, []);

  return (
    <div className="w-full h-full overflow-y-auto text-black mx-auto p-6 space-y-6 bg-white rounded-lg shadow-md">
      <div className="space-y-1">
        <label htmlFor="from" className="block text-sm font-semibold text-gray-700">
          From:
        </label>
        <input
          id="from"
          type="text"
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="sender@example.com"
        />
      </div>

      <div className="space-y-1">
        <label htmlFor="to" className="block text-sm font-semibold text-gray-700">
          To:
        </label>
        <input
          id="to"
          type="text"
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="recipient@example.com"
        />
      </div>

      <div className="space-y-1">
        <label htmlFor="subject" className="block text-sm font-semibold text-gray-700">
          Subject:
        </label>
        <input
          id="subject"
          type="text"
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Subject of your email"
        />
      </div>

      <div className="space-y-1">
        <label className="block text-sm font-semibold text-gray-700 mb-1">Body:</label>
        <textarea ref={bodyRef} />
      </div>

      <div className="space-y-1">
        <label className="block text-sm font-semibold text-gray-700 mb-1">Signature:</label>
        <textarea ref={signatureRef} />
      </div>
    </div>
  );
}

export default EmailDiv;
