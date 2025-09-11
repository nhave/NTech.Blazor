namespace NTech.Blazor
{
    public static class ClassBuilder
    {
        public static string Build(params string[] classes)
        {
            return string.Join(" ", classes.Where(c => !string.IsNullOrWhiteSpace(c)));
        }
    }
}
