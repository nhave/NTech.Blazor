using Microsoft.JSInterop;

namespace NTech.Blazor.Services
{
    public class NTechBlazorService : INTechBlazorService
    {
        private readonly IJSRuntime jSRuntime;

        public NTechBlazorService(IJSRuntime jSRuntime)
        {
            this.jSRuntime = jSRuntime;
        }

        /// <summary>
        /// Sets focus to the specified HTML element by its ID.
        /// </summary>
        /// <remarks>This method uses JavaScript interop to invoke the "focusElement" function in the
        /// browser.  Ensure that the specified element exists in the DOM and is focusable.</remarks>
        /// <param name="elementId">The ID of the HTML element to focus. Cannot be null or empty.</param>
        /// <returns>A task that represents the asynchronous operation.</returns>
        public async Task FocusElement(string elementId)
        {
            await jSRuntime.InvokeVoidAsync("focusElement", elementId);
        }
    }
}
